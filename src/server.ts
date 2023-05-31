import mongoose from 'mongoose'
import config from './config/index'
import app from './app'

async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string)
    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`)
    })
    console.log('Database connected Successfully')
  } catch (err) {
    console.log('Database Connection Error')
  }
}

bootstrap()
