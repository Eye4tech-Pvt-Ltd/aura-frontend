import { useRouter } from "next/navigation"
import { useMutation } from "./useMutation";
import { apiRequest } from "../lib/api/api-client";
import axiosInstance from "../lib/api/axios-instance";
import { API_ENDPOINTS } from "../lib/api/endpoints";
import { RegisterPayload, RegisterResponseData } from "../types/register";

const useRegister = () => {
  const router = useRouter()

  // ---- Register ----
  const { mutate: mutateRegister, loading: loadingRegister } = useMutation<
    RegisterResponseData,
    RegisterPayload
  >(
    (payload: RegisterPayload) =>
      apiRequest<RegisterResponseData>(() => axiosInstance.post(API_ENDPOINTS.AUTH.REGISTER, payload))
  )

  const register = async (payload: RegisterPayload) => {
    const res = await mutateRegister(payload)
    if (res) {
      localStorage.setItem("token", res.access_token)
      router.push("/user")
    }
  }

  return {
    register,
    loadingRegister,
  }
}

export default useRegister