import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
		}),
});

const projects = defineCollection({
	loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		status: z.enum(['upcoming', 'in-progress', 'completed']),
		tags: z.array(z.string()),
		startDate: z.coerce.date().optional(),
		repoUrl: z.string().url().optional(),
		liveUrl: z.string().url().optional(),
		order: z.number().default(0),
		section: z.enum(['started', 'roadmap']).default('roadmap'),
	}),
});

export const collections = { blog, projects };
