import Router from 'express-promise-router'
import { createUser, login, refreshToken } from '../controllers/auth.controllers'
import { Auth } from '../middleware'

const router = Router()

router.get('/', Auth, (req, res, next) => {
  res.req.body = {
    saludo: 'hola'
  }

  next()
})

router.post('/login', login)
router.post('/refreshToken', refreshToken)
router.post('/createUser', createUser)

export default router
