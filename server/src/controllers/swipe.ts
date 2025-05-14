import { Request, Response } from 'express'

export const swipe = async (req: Request, res: Response) => {
  // TODO: store swipe result
  return res.status(501).json({ message: 'swipe not implemented' })
}
