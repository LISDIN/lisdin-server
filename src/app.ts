import path from 'path'
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import configRoutes from './routes/index'
import compression from 'compression'

dotenv.config()

const PORT = process.env.PORT || 3001

const app = express()
app.use(cors())
app.use(compression())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

configRoutes(app)

app.use(express.static(path.resolve('lisdin-ui', 'build')))
app.get('*', (_, res) => {
  res.sendFile(path.resolve('lisdin-ui', 'build', 'index.html'))
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
