import axiosInstance from "./axios-instance"
import { apiRequest } from "./api-client"

export const swrFetcher = (url: string) =>
  apiRequest(() => axiosInstance.get(url), { toast: false })