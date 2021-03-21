import { COCInvestigator } from "../../models/COCInvestigator/COCInvestigator";
import { getAxiosInstance } from "../getAxiosInstance";
import { endpointRoutes } from "./endpointRoutes";
import { getBaseApiUrl } from "../../config";
import { HttpMethod } from "../HTTPMethods";
import { getCookie } from "../../global/cookies";

const fetcher = getAxiosInstance({baseURL: getBaseApiUrl(), headers: {auth: getCookie('auth')}})

export const saveInvestigator = async (investigator: COCInvestigator) => {
  await fetcher.request({
    url: endpointRoutes.createInvestigator,
    method: HttpMethod.POST,
    data: investigator,
  })
}

export const editInvestigator = async (investigator: COCInvestigator) => {
  await fetcher.request({
    url: endpointRoutes.editInvestigator,
    method: HttpMethod.PUT,
    data: investigator,
  })
}

export const fetchInvestigator = async (id: string) => {
  const res = await fetcher.request({
    url: endpointRoutes.editInvestigator,
    method: HttpMethod.PUT,
    params: {
      id,
    },
  })
  return res.data as COCInvestigator
}