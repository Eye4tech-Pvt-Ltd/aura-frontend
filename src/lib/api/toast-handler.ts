import { toast } from "react-toastify"

export const toastSuccess = (msg: string) => {
  toast.success(msg || "Success")
}

export const toastError = (msg: string) => {
  toast.error(msg || "Something went wrong")
}

export const toastInfo = (msg: string) => {
  toast.info(msg)
}
