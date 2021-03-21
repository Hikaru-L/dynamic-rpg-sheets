import { getAxiosInstance } from "../getAxiosInstance";
import { endpointRoutes } from "./endpointRoutes";
import { getBaseApiUrl } from "../../config";
import { HttpMethod } from "../HTTPMethods";
import { setCookie } from "../../global/cookies";

const fetcher = getAxiosInstance({baseURL: getBaseApiUrl()})

export const signUp = async (username: string, password: string) => {
  try {
    const res = await fetcher.request({
      url: endpointRoutes.signup,
      method: HttpMethod.POST,
      data: {username, password},
    })
    setCookie('auth', res.data.authorizationToken)
  } catch (error) {
      return false
  }
  return true
}

export const login = async (username: string, password: string) => {
  try {
    const res = await fetcher.request({
      url: endpointRoutes.login,
      method: HttpMethod.POST,
      data: {username, password},
    })
    setCookie('auth', res.data.authorizationToken)
  } catch (error) {
      return false
  }
  return true
}
