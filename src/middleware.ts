import { NextFunction, Request, Response } from 'express'
import { supabase } from './lib/supabase/client'
import { User } from '@supabase/supabase-js'

export interface RequestContext extends Request {
  user: User;
}

export const Auth = async (
  req: RequestContext,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization?.split(' ')[1]

    if (!token) {
      const error = {
        status: null,
        message: null
      }
      error.status = 401
      error.message = 'Unauthorized'
      throw error
    }

    const { data, error } = await supabase.auth.getUser(token)

    if (error) {
      error.status = 403
      throw error
    }

    req.user = data.user

    next()
  } catch (error) {
    next(error)
  }
}
