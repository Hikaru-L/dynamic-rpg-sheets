import { getAxiosInstance } from "../getAxiosInstance";
import { endpointRoutes } from "./endpointRoutes";
import { getBaseApiUrl } from "../../config";
import { HttpMethod } from "../HTTPMethods";
import { setCookie, getCookie } from "../../global/cookies";
import { getCOCSheetsApiModel } from "../apiModels/getCOCSheetsApiModel";

const fetcher = getAxiosInstance({baseURL: getBaseApiUrl(), headers: {auth: getCookie('auth')}})

export const getCOCSheets = async () => {
  try {
    const res = await fetcher.request({
      url: endpointRoutes.getCOCSheets,
      method: HttpMethod.GET,
    }) as getCOCSheetsApiModel
    
  } catch (error) {
      return false
  }
  return true
}

