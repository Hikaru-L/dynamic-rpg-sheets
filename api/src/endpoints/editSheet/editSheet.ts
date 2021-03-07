import {Request, Response} from 'express'
import fs from 'fs'
import savedSheets from '../../../data/sheets.json'
import { COCInvestigatorsDataModel } from '../../models/data/COCInvestigatorsDataModel.js'
import { CallOfCthulhuInvestigator } from '../../models/characterSheets/CallOfCthulhuInvestigator.js'

export const editSheetEndpoint = (req: Request, res: Response) => {

  console.log('request body: ', req.body)

  const sheets = (savedSheets as COCInvestigatorsDataModel).sheets
  const index = sheets.findIndex((sheet) => sheet.info.name === (req.body as CallOfCthulhuInvestigator).info.name)
  if(index >= 0) {
    sheets[index] = req.body as CallOfCthulhuInvestigator
    const newData: COCInvestigatorsDataModel = {
      sheets
    }
    fs.writeFileSync('./data/sheets.json', JSON.stringify(newData))
    res.send('Your character was saved!')
  } else {
        //return error
        res.send('Choose a different id')
  }
}