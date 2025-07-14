import * as z from 'zod'
import { userSchema, userRequestSchema, userResponseSchema } from '@/schemas/user'

export type User = z.infer<typeof userSchema>

export type UserRequest = z.infer<typeof userRequestSchema>

export type UserResponse = z.infer<typeof userResponseSchema>
