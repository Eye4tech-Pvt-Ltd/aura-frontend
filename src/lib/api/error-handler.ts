import { AxiosError } from "axios"
import { toastError } from "./toast-handler"

export function handleAxiosError(error: AxiosError) {
  if (error.code === "ERR_NETWORK") {
    toastError("Server unreachable or no internet connection.")
    throw error
  }

  const status = error.response?.status
  const message = (error.response?.data as any)?.message

  switch (status) {
    case 400:
      toastError(message || "Bad request.")
      break

    case 401:
      toastError("Session expired. Please login again.")
      break

    case 403:
      toastError("You are not allowed to access this.")
      break

    case 404:
      toastError("Resource not found.")
      break

    case 409:
      toastError(message || "Conflict occurred.")
      break

    case 500:
      toastError("Internal server error.")
      break

    default:
      toastError(message || "Unexpected error.")
  }

  throw error
}