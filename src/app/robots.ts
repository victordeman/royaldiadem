import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://royaldiademresearchlaboratory-8ml7ui2yc.vercel.app/sitemap.xml',
  }
}
