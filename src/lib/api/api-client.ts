import { toastSuccess } from './toast-handler'
import { handleAxiosError } from './error-handler'

export interface ApiResponse<T> {
  status: boolean
  message: string
  data: T
}

type RequestOptions = {
  toast?: boolean
}

export async function apiRequest<T>(
  requestFn: () => Promise<any>,
  options: RequestOptions = { toast: true }
): Promise<T> {
  try {
    const res = await requestFn()
    const response: ApiResponse<T> = res.data

    // Backend status false → treat as error
    if (!response.status) {
      throw new Error(response.message)
    }

    if (options.toast) {
      toastSuccess(response.message)
    }

    return response.data
  } catch (error: any) {
    console.log('API Request Error:', error?.response || error)
    handleAxiosError(error)
    throw error
  }
}
