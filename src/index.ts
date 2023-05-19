import app from './app'
import { env } from './config/env'

import cron from 'node-cron'

const PORT = env.PORT ?? 3001

cron.schedule('*/1 * * * *', async () => {
  console.log('running your task...')
})

app.listen(PORT, () => {
  console.log(`Server listening in port ${PORT}`)
})
