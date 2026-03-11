import { useRouter } from 'next/navigation'
import { useMutation } from '../useMutation'
import { LoginPayload, LoginResponseData } from '@/src/types/login'
import { apiRequest } from '@/src/lib/api/api-client'
import axiosInstance from '@/src/lib/api/axios-instance'
import { API_ENDPOINTS } from '@/src/lib/api/endpoints'
import Cookies from 'js-cookie'
import { useState } from 'react'
import { set } from 'zod/v4'
const useLogin = () => {
  const router = useRouter()
  const [data, setData] = useState()
  // ---- Login ----
  const { mutate: mutateLogin, loading: loadingLogin } = useMutation<
    LoginResponseData,
    LoginPayload
  >((payload: LoginPayload) =>
    apiRequest<LoginResponseData>(() =>
      axiosInstance.post(API_ENDPOINTS.AUTH.LOGIN, payload)
    )
  )

  const login = async (payload: LoginPayload) => {
    const res: any = await mutateLogin(payload)
    if (res) {
      Cookies.set('token', res.access_token, {
        expires: 7, // days
        secure: true,
        sameSite: 'strict',
      })
      setData(res)
      router.push('/user')
      return res
    }
  }

  return {
    login,
    loadingLogin,
    data,
  }
}

export default useLogin
