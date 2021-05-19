import { getAxiosInstance } from "../getAxiosInstance";
import { endpointRoutes } from "./endpointRoutes";
import { getBaseApiUrl } from "../../config";
import { HttpMethod } from "../HTTPMethods";
import { setCookie, getCookie } from "../../global/cookies";
import { getCOCSheetsApiModel } from "../apiModels/getCOCSheetsApiModel";

const fetcher = getAxiosInstance({baseURL: getBaseApiUrl(), headers: {token: getCookie('auth')}})

export const getCOCSheets = async () => {
  try {
    const res = await fetcher.request({
      url: endpointRoutes.getCOCSheets,
      method: HttpMethod.GET,
    }) 
    const body = res.data as getCOCSheetsApiModel
    return body.sheets
  } catch (error) {
    console.log('ERROR GETTING CTHULHU SHEETS', error)
      return undefined
  }
}

