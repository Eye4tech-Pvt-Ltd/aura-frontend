import { useRouter } from 'next/navigation'
import { useMutation } from '../useMutation'
import { apiRequest } from '@/src/lib/api/api-client'
import axiosInstance from '@/src/lib/api/axios-instance'
import { API_ENDPOINTS } from '@/src/lib/api/endpoints'
import Cookies from 'js-cookie'
const useLogout = () => {
  const router = useRouter()

  // ---- Logout ----
  const { mutate: mutateLogout, loading: loadingLogout } = useMutation<void>(
    () => apiRequest<void>(() => axiosInstance.post(API_ENDPOINTS.AUTH.LOGOUT))
  )

  const logout = async () => {
    const res = await mutateLogout()
    console.log(res)
    if (res !== undefined) {
      Cookies.remove('token')
      router.push('/login')
    }
  }

  return {
    logout,
    loadingLogout,
  }
}

export default useLogout
