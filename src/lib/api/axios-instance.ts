import axios from "axios"

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
})

// Attach token dynamically (cookie/session)
axiosInstance.interceptors.request.use((config) => {
  const token =
    typeof window !== "undefined"
      ? localStorage.getItem("token")
      : null

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

export default axiosInstance