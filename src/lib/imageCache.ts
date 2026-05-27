/**
 * Image Cache Utility for Royal DRL
 * Uses the browser Cache API for storing image blobs and localStorage for metadata (ETags/Last-Modified).
 */

const CACHE_NAME = "royaldrl-images-v1";
const META_KEY_PREFIX = "img_meta_";

interface ImageMeta {
  etag?: string | null;
  lastModified?: string | null;
}

/**
 * Gets a cached version of the image if it's fresh, otherwise fetches and updates the cache.
 * Returns an object URL (blob:) that can be used as an <img> src.
 */
export async function getCachedOrFetchImage(imageUrl: string): Promise<string> {
  if (typeof window === "undefined" || !("caches" in window)) {
    return imageUrl;
  }

  try {
    const cache = await caches.open(CACHE_NAME);
    const cachedResponse = await cache.match(imageUrl);
    const metaKey = `${META_KEY_PREFIX}${imageUrl}`;
    const storedMetaRaw = localStorage.getItem(metaKey);
    const storedMeta: ImageMeta = storedMetaRaw ? JSON.parse(storedMetaRaw) : {};

    // Prepare headers for conditional request
    const headers: Record<string, string> = {};
    if (storedMeta.etag) {
      headers["If-None-Match"] = storedMeta.etag;
    }
    if (storedMeta.lastModified) {
      headers["If-Modified-Since"] = storedMeta.lastModified;
    }

    // If we have a cached response, we do a background freshness check (SWR-like)
    // or a conditional request. For this implementation, we'll do a conditional fetch.

    try {
      const response = await fetch(imageUrl, { headers });

      if (response.status === 304 && cachedResponse) {
        // Fresh! Return the cached blob
        const blob = await cachedResponse.blob();
        return URL.createObjectURL(blob);
      }

      if (response.ok) {
        // New or updated image
        const clonedResponse = response.clone();
        await cache.put(imageUrl, clonedResponse);

        // Update metadata
        const newMeta: ImageMeta = {
          etag: response.headers.get("ETag"),
          lastModified: response.headers.get("Last-Modified"),
        };
        localStorage.setItem(metaKey, JSON.stringify(newMeta));

        const blob = await response.blob();
        return URL.createObjectURL(blob);
      }
    } catch (fetchError) {
      console.warn(`Fetch failed for ${imageUrl}, trying cache...`, fetchError);
      if (cachedResponse) {
        const blob = await cachedResponse.blob();
        return URL.createObjectURL(blob);
      }
    }

    // If fetch failed and no cache, return original URL
    return imageUrl;
  } catch (error) {
    console.error("Image cache error:", error);
    return imageUrl;
  }
}

/**
 * Clears the entire image cache and associated metadata.
 */
export async function clearImageCache(): Promise<void> {
  if (typeof window === "undefined" || !("caches" in window)) {
    return;
  }

  try {
    await caches.delete(CACHE_NAME);

    // Clear localStorage metadata
    const keysToRemove: string[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key?.startsWith(META_KEY_PREFIX)) {
        keysToRemove.push(key);
      }
    }
    keysToRemove.forEach(key => localStorage.removeItem(key));

    console.log("Image cache cleared.");
  } catch (error) {
    console.error("Failed to clear image cache:", error);
  }
}
