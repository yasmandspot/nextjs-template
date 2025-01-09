import { BASE_URL } from '@/lib/config';
import type { MetadataRoute } from 'next';

/**
 * Sitemap generator.
 * @return {MetadataRoute.Sitemap} The sitemap.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  // include all the pages that should be indexed by search engines
  // including the dynamic pages
  // https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
  ];
}
