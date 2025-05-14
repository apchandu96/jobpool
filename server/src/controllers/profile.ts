import { Request, Response } from 'express'

export const createProfile = async (req: Request, res: Response) => {
  // TODO: create profile document linked to user
  return res.status(501).json({ message: 'createProfile not implemented' })
}

export const getProfiles = async (req: Request, res: Response) => {
  // TODO: apply filters and pagination
  return res.status(501).json({ message: 'getProfiles not implemented' })
}

export const getProfile = async (req: Request, res: Response) => {
  // TODO: get single profile
  return res.status(501).json({ message: 'getProfile not implemented' })
}
