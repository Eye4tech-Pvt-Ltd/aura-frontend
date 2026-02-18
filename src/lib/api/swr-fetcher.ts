import axiosInstance from './axios-instance'
import { apiRequest } from './api-client'
import useSWR, { mutate } from 'swr'
import { handleAxiosError } from './error-handler'
import { useState } from 'react'
import { AxiosResponse } from 'axios'

export const swrFetcher = async <T = any>(url: string): Promise<T> => {
  const response: AxiosResponse<T> = await apiRequest(
    () => axiosInstance.get(url),
    { toast: false }
  )

  return response.data
}
export const useGetSWR = <T>(key: string | null) => {
  const { data, error, isLoading, mutate } = useSWR<T>(key, swrFetcher)
  console.log('Team Members Data:', data)
  return {
    data,
    error,
    isLoading,
    mutate,
  }
}
export const usePost = (url: string, key?: string) => {
  const [loading, setLoading] = useState(false)
  const postData = async (
    payload: any,
    onSuccess?: () => void,
    onError?: (error: any) => void
  ) => {
    try {
      setLoading(true)
      await axiosInstance.post(url, payload)
      if (onSuccess) onSuccess()
    } catch (error: any) {
      if (onError) onError(error)
      console.log('API Request Error:', error?.response || error)
      handleAxiosError(error)
      throw error
    } finally {
      setLoading(false)
    }
    mutate(key || url)
  }
  return { postData, loading }
}
export const useUpdate = (key: string) => {
  const [loading, setLoading] = useState(false)
  const updateData = async (
    url: string,
    payload: any,
    onSuccess?: () => void
  ) => {
    try {
      setLoading(true)
      await axiosInstance.put(url, payload)
      mutate(key)
      if (onSuccess) onSuccess()
    } catch (error: any) {
      console.log('API Request Error:', error?.response || error)
      handleAxiosError(error)
      throw error
    } finally {
      setLoading(false)
    }
  }
  return { updateData, loading }
}
export const useDelete = (key: string) => {
  const [loading, setLoading] = useState(false)
  const deleteData = async (url: string, onSuccess: () => void) => {
    try {
      setLoading(true)
      await axiosInstance.delete(url)
      if (onSuccess) onSuccess()
      mutate(key)
    } catch (error: any) {
      console.log('API Request Error:', error?.response || error)
      handleAxiosError(error)
      throw error
    } finally {
      setLoading(false)
    }
  }
  return { deleteData, loading }
}
