import { NextFunction, Request, Response } from 'express'

export const HandlerContext = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { body, statusCode } = res.req
  res.status(statusCode || 200).json({
    raw: body
  })
}
