import { useRouter } from 'next/navigation'
import { useMutation } from '../useMutation'
import { RegisterPayload, RegisterResponseData } from '@/src/types/register'
import { apiRequest } from '@/src/lib/api/api-client'
import axiosInstance from '@/src/lib/api/axios-instance'
import { API_ENDPOINTS } from '@/src/lib/api/endpoints'

import { useState } from 'react'
import { TeammateData, TeammateResponseData } from '@/src/types/teamate'
const usePostTeammate = () => {
  const router = useRouter()
  const [data, setData] = useState<TeammateResponseData | null>(null)

  // ---- Register ----
  const { mutate: mutateTeammate, loading: loadingTeammate } = useMutation<
    TeammateResponseData,
    TeammateData
  >((payload: TeammateData) =>
    apiRequest<TeammateResponseData>(() =>
      axiosInstance.post(API_ENDPOINTS.TEAM.INVITE, payload)
    )
  )

  const register = async (payload: TeammateData) => {
    const res = await mutateTeammate(payload)
    setData(res)
  }

  return {
    register,
    loadingTeammate,
    data,
  }
}

export default usePostTeammate
