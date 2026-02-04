import { apiRequest } from "../lib/api/api-client";
import axiosInstance from "../lib/api/axios-instance";
import { API_ENDPOINTS } from "../lib/api/endpoints";


export const AuthService = {
    
  login(payload: { email: string; password: string }) {
    return apiRequest(() =>
      axiosInstance.post(API_ENDPOINTS.AUTH.LOGIN, payload)
    )
  },

  profile() {
    return apiRequest(() =>
      axiosInstance.get(API_ENDPOINTS.AUTH.PROFILE)
    )
  },
}
