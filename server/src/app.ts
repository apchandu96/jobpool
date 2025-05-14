import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'

import authRoutes from './routes/auth'
import profileRoutes from './routes/profile'
import swipeRoutes from './routes/swipe'

const app = express()

app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  credentials: true
}))

app.use(express.json())
app.use(morgan('dev'))
app.use(cookieParser())

app.use('/api/auth', authRoutes)
app.use('/api/profile', profileRoutes)
app.use('/api/swipe', swipeRoutes)

app.get('/api/health', (_, res) => res.json({ ok: true }))

export default app
