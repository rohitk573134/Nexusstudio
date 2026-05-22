import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://naiduandamantravels.com', priority: 1 },
    { url: 'https://naiduandamantravels.com/admin', priority: 0.4 }
  ];
}
