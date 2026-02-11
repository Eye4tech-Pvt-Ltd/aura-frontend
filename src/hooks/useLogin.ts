import { useRouter } from "next/navigation"
import { useMutation } from "./useMutation";
import { apiRequest } from "../lib/api/api-client";
import axiosInstance from "../lib/api/axios-instance";
import { API_ENDPOINTS } from "../lib/api/endpoints";
import { LoginPayload, LoginResponseData } from "../types/login";

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
      router.push("/dashboard")
    }
  }

  return {
    login,
    loadingLogin,
  }
}

export default useLogin