import { COCInvestigator } from "../../models/COCInvestigator/COCInvestigator";
import { getAxiosInstance } from "../getAxiosInstance";
import { endpointRoutes } from "./endpointRoutes";
import { getBaseApiUrl } from "../../config";
import { HttpMethod } from "../HTTPMethods";

const fetcher = getAxiosInstance({baseURL: getBaseApiUrl()})

export const saveInvestigator = async (investigator: COCInvestigator) => {
  const res = await fetcher.request({
    url: endpointRoutes.createInvestigator,
    method: HttpMethod.POST,
    data: investigator,
  })
}