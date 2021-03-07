import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import {getBaseApiUrl} from '../config'

export const getAxiosInstance = (config: AxiosRequestConfig): AxiosInstance => {
  return axios.create({
    baseURL: getBaseApiUrl(),
    ...config,
  })
}