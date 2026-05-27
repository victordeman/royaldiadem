"use client";

import React, { useState, useEffect } from "react";
import { getCachedOrFetchImage } from "@/lib/imageCache";
import { cn } from "@/lib/utils";

interface CachedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

/**
 * A smart image component that caches images using the browser's Cache API.
 * Displays a skeleton loader while the image is being resolved.
 */
export function CachedImage({ src, alt, className, ...props }: CachedImageProps) {
  const [resolvedSrc, setResolvedSrc] = useState<string | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function loadImage() {
      try {
        const cachedOrFetched = await getCachedOrFetchImage(src);
        if (isMounted) {
          setResolvedSrc(cachedOrFetched);
        }
      } catch (err) {
        console.error("Failed to load cached image:", err);
        if (isMounted) {
          setError(true);
          setResolvedSrc(src); // Fallback to original URL
        }
      }
    }

    loadImage();

    return () => {
      isMounted = false;
      // Note: Object URLs should ideally be revoked, but we might be using the same blob URL across multiple components
      // or re-renders. Revoking here might cause broken images if not careful.
      // For now, we rely on the browser to clean up or let them persist during the session.
    };
  }, [src]);

  // If we haven't resolved the URL yet, show a skeleton
  if (!resolvedSrc && !error) {
    return (
      <div
        className={cn("w-full h-full bg-white/5 animate-pulse", className)}
      />
    );
  }

  // Once resolved or errored, show the image
  return (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      src={resolvedSrc || src}
      alt={alt}
      className={cn(className, !resolvedSrc && "opacity-0", resolvedSrc && "opacity-100 transition-opacity duration-300")}
      onError={() => setError(true)}
      {...props}
    />
  );
}
