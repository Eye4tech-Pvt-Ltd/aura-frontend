import { useRouter } from "next/navigation"
import { useMutation } from "../useMutation"
import { LoginPayload, LoginResponseData } from "@/src/types/login"
import { apiRequest } from "@/src/lib/api/api-client"
import axiosInstance from "@/src/lib/api/axios-instance"
import { API_ENDPOINTS } from "@/src/lib/api/endpoints"


const useLogin = () => {
  const router = useRouter()

  // ---- Login ----
  const { mutate: mutateLogin, loading: loadingLogin } = useMutation<
    LoginResponseData,
    LoginPayload
  >(
    (payload: LoginPayload) =>
      apiRequest<LoginResponseData>(() => axiosInstance.post(API_ENDPOINTS.AUTH.LOGIN, payload))
  )

  const login = async (payload: LoginPayload) => {
    const res = await mutateLogin(payload)
    if (res) {
      localStorage.setItem("token", res.access_token)
      router.push("/user")
    }
  }

  return {
    login,
    loadingLogin,
  }
}

export default useLogin