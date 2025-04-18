import { glob } from 'astro/loaders'
import { defineCollection, z } from 'astro:content'

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    author: z.object({
      name: z.string(),
      github: z.string()
    }),
    image: z.string().optional().default('/default.webp')
  })
})

export const collections = { blog }
