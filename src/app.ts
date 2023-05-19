import express, { NextFunction, Request, Response, json } from 'express'
import { HandlerError } from './config/handle-error'
import RootRouter from './routes/index.routes'
import morgan from 'morgan'
import { HandlerContext } from './config/handle-context'

const app = express()

app.use(json({ limit: '50mb' }))
app.use(morgan('dev'))

app.use('/api', RootRouter)

app.use((req: Request, res: Response, next: NextFunction) => {
  const error = new Error(`Ruta no encontrada - ${req.originalUrl}`)
  res.status(404)
  next(error)
})

app.use(HandlerError)

app.use(HandlerContext)

export default app
