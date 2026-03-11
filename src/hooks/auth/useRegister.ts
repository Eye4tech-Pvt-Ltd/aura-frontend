import { useRouter } from 'next/navigation'
import { useMutation } from '../useMutation'
import { RegisterPayload, RegisterResponseData } from '@/src/types/register'
import { apiRequest } from '@/src/lib/api/api-client'
import axiosInstance from '@/src/lib/api/axios-instance'
import { API_ENDPOINTS } from '@/src/lib/api/endpoints'
import Cookies from 'js-cookie'
import { useState } from 'react'
const useRegister = () => {
  const router = useRouter()
  const [data, setData] = useState()

  // ---- Register ----
  const { mutate: mutateRegister, loading: loadingRegister } = useMutation<
    RegisterResponseData,
    RegisterPayload
  >((payload: RegisterPayload) =>
    apiRequest<RegisterResponseData>(() =>
      axiosInstance.post(API_ENDPOINTS.AUTH.REGISTER, payload)
    )
  )

  const register = async (payload: RegisterPayload) => {
    const res:any = await mutateRegister(payload)
    if (res) {
      Cookies.set('token', res.access_token, {
        expires: 7, 
        secure: true,
        sameSite: 'strict',
      })
      setData(res)
      router.push('/user')
    }
  }

  return {
    register,
    loadingRegister,
    data,
  }
}

export default useRegister
