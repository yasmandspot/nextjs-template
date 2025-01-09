import { BASE_URL } from '@/lib/config';
import type { MetadataRoute } from 'next';

/**
 * Robots.txt file generator.
 * @return {MetadataRoute.Robots} The robots.txt file.
 */
export default function robots(): MetadataRoute.Robots {
  // update this robots.txt file to your needs
  // https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/dashboard', '/users'],
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
