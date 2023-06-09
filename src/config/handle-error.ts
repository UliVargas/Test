import { NextFunction, Request, Response } from 'express'

export const HandlerError = (error, req: Request, res: Response, next: NextFunction) => {
  if (error) {
    return res.status(error.status ?? res.statusCode).json({
      message: error.message ?? error
    })
  }

  next()
}
