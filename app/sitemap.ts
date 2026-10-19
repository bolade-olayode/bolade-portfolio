import type { MetadataRoute } from 'next';
import { getAllWork } from '@/lib/content';
import { site } from '@/lib/site';
export default function sitemap(): MetadataRoute.Sitemap { return [{ url: site.url, priority: 1 }, ...getAllWork().map(w => ({ url: `${site.url}/work/${w.frontmatter.slug}`, priority: 0.8 }))]; }
