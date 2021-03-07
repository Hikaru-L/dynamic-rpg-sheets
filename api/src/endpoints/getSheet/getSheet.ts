import {Request, Response} from 'express'
import fs from 'fs'
import savedSheets from '../../../data/sheets.json'
import { CallOfCthulhuInvestigator } from '../../models/characterSheets/CallOfCthulhuInvestigator.js'
import { COCInvestigatorsDataModel } from '../../models/data/COCInvestigatorsDataModel.js'

export const getSheetEndpoint = (req: Request, res: Response) => {
  const sheetId = req.query.id
  const sheets = (savedSheets as unknown as COCInvestigatorsDataModel).sheets
  console.log(sheets)
  const sheet = sheets.find((currSheet) => {return currSheet.info.name.toString() === sheetId})
  console.log('Requested character of: ', sheetId, ' id')
  if(sheet) {
    //deu bom, retornar sheet
    res.send(sheet)
  } else {
    res.send('Não tem esse id no banco otário')
  }
  //salvar
  
}