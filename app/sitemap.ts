import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';
import { platformProjects } from '@/lib/platforms';
export default function sitemap(): MetadataRoute.Sitemap { return [{ url: site.url, priority: 1 }, { url: `${site.url}/portfolio`, priority: 0.8 }, ...platformProjects.map(project => ({ url: `${site.url}/work/${project.slug}`, priority: 0.8 }))]; }
