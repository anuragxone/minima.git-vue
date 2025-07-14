import * as z from 'zod'

export const userSchema = z.object({
  email: z.email(),
  password: z.string().min(8),
  slug: z.string().optional(),
})

export const userRequestSchema = z.object({
  user: userSchema,
})

export const userResponseSchema = z.object({
  id: z.number(),
  email: z.string(),
  slug: z.string(),
  created_at: z.string(),
  updated_at: z.string(),
})
