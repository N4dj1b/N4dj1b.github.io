import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://n4dj1b.github.io',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    // Adding main project routes if applicable
    {
      url: 'https://n4dj1b.github.io/projects/cyble',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: 'https://n4dj1b.github.io/projects/restona',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
  ]
}
