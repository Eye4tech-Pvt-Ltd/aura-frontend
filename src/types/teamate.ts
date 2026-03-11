export type TeammateData = {
  email: string
  parent_id?: number
  id: number
  lastActive: string
  callsHandled: number
  role: 'customer' | 'admin' | 'super-admin'
  status: string
  name: 'string'
  avatar: 'string'
}
export interface TeammateResponseData {
  success: boolean
  message: string
  data: TeammateData
}
export interface TeammateGetResponseData {
  success: boolean
  message: string
  users: TeammateData[] // ✅ array of teammates
}
