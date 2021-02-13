import {Request, Response} from 'express'

export const homeEndpoint = (req: Request, res: Response) => {
  res.send('SUP')
}