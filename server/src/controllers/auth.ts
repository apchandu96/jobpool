import { Request, Response } from 'express'

export const register = async (req: Request, res: Response) => {
  // TODO: create user and hash password
  return res.status(501).json({ message: 'register not implemented' })
}

export const login = async (req: Request, res: Response) => {
  // TODO: verify user, set httpOnly cookie
  return res.status(501).json({ message: 'login not implemented' })
}

export const me = async (req: Request, res: Response) => {
  // TODO: return current user info
  return res.status(501).json({ message: 'me not implemented' })
}
