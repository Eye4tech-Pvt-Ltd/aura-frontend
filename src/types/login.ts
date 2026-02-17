// User type
export interface User {
  id: number
  name: string
  email: string
  parent_id: number | null
  role: string
}

// Login payload type
export interface LoginPayload {
  email: string
  password: string
}

// Login response data type
export interface LoginResponseData {
  access_token: string
  user: User
}

// Login API response type (full response from backend)
export interface LoginApiResponse {
  status: boolean
  message: string
  data: LoginResponseData
}

