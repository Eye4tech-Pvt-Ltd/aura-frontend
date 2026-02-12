import { User } from "./login"

// Register payload type
export interface RegisterPayload {
  name: string
  email: string
  password: string
  password_confirmation: string
}

// Register response data type
export interface RegisterResponseData {
  access_token: string
  user: User
}

// Register API response type (full response from backend)
export interface RegisterApiResponse {
  status: boolean
  message: string
  data: RegisterResponseData
}

