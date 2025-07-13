import * as z from 'zod'

export const userSchema = z.object({
  email: z.email(),
  password: z.string().min(8),
  slug: z.string().optional(),
})

export type User = z.infer<typeof userSchema>

export const userRequestSchema = z.object({
  user: userSchema,
})

export type UserRequest = z.infer<typeof userRequestSchema>

export const userResponseSchema = z.object({
  id: z.number(),
  email: z.string(),
  slug: z.string(),
  created_at: z.string(),
  updated_at: z.string(),
})

export type UserResponse = z.infer<typeof userResponseSchema>
