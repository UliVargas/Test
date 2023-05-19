import app from './app'
import { env } from './config/env'

import cron from 'node-cron'
import { deleteUnconfirmedUsers } from './services/auth/deleteUnconfirmedUsers.service'

const PORT = env.PORT ?? 3001

cron.schedule('*/1 * * * *', async () => {
  deleteUnconfirmedUsers()
  console.log('running your task...', deleteUnconfirmedUsers)
})

app.listen(PORT, () => {
  console.log(`Server listening in port ${PORT}`)
})
