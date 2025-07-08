export interface User {
  email: string
  password: string
  slug?: string
}

export interface UserRequest {
  user: User
}

export interface UserResponse {
  id: number
  email: string
  slug: string
  created_at: string
  updated_at: string
}
