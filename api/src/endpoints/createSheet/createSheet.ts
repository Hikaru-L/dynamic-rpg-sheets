import {Request, Response} from 'express'
import fs from 'fs'
import savedSheets from '../../../data/sheets.json'
import { COCInvestigatorsDataModel } from '../../models/data/COCInvestigatorsDataModel.js'
import { CallOfCthulhuInvestigator } from '../../models/characterSheets/CallOfCthulhuInvestigator.js'

export const createSheetEndpoint = (req: Request, res: Response) => {

  console.log('request body: ', req.body)

  const sheets = (savedSheets as unknown as COCInvestigatorsDataModel).sheets
  const existingSheet = sheets.find((sheet) => sheet.info.name === (req.body as CallOfCthulhuInvestigator).info.name)
  if(existingSheet) {
    //return error
    res.send('Choose a different id')
  } else {
    sheets.push(req.body as CallOfCthulhuInvestigator)
    const newData: COCInvestigatorsDataModel = {
      sheets
    }
    fs.writeFileSync('./data/sheets.json', JSON.stringify(newData))
    res.send('Your character was saved!')
  }
}