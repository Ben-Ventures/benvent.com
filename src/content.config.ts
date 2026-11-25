// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content'

// 2. Import loader(s)
import { glob } from 'astro/loaders'

// 3. Define your collection(s)
const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      platform: z.string(),
      isFeatured: z.boolean().default(false),
      isHidden: z.boolean().default(false), // kept in the repo but left out of every page, list and the sitemap
      sortOrder: z.number(),
      description: z.string(),
      featuredImage: z.string(),
      badge: z.string().optional(), // a short label shown as the kit's magenta .badge, e.g. "Latest"
      // Optional light and dark banners that follow the site theme; without them the page uses public/projects/<id>/banner.png
      bannerLight: image().optional(),
      bannerDark: image().optional(),
    }),
})

// 4. Export a single `collections` object to register you collection(s)
export const collections = { projects }
