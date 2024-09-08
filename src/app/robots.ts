import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/api', '/public/', '/login'],
      },
    ],
    sitemap: [
      `${process.env.NEXT_PUBLIC_BASE_URL}/ua/sitemap.xml`,
      `${process.env.NEXT_PUBLIC_BASE_URL}/en/sitemap.xml`,
      `${process.env.NEXT_PUBLIC_BASE_URL}/it/sitemap.xml`,
    ],
  };
}
