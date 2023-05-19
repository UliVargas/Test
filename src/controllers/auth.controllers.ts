import { NextFunction, Request, Response } from 'express'
import { Login, RefreshToken, CreateUser } from '../useCases/auth'

export const login = async (req: Request, res: Response, next: NextFunction) => {
  res.req.body = await Login(req.body)
  next()
}

export const refreshToken = async (req: Request, res: Response, next: NextFunction) => {
  const { refreshToken } = req.body
  res.req.body = await RefreshToken(refreshToken)
  next()
}

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
  res.req.body = await CreateUser(req.body)
  next()
}
