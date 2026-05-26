import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://royaldiademresearchlaboratory-8ml7ui2yc.vercel.app'

  const routes = [
    '',
    '/about',
    '/products',
    '/research',
    '/industries',
    '/case-studies',
    '/contact',
    '/quote',
    '/insights',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))
}
