import http from 'http'
import app from './app'
import { Server as SocketIOServer } from 'socket.io'
import { connectDB } from './config/db'
import dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT || 5000

const httpServer = http.createServer(app)
const io = new SocketIOServer(httpServer, {
  cors: {
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
    credentials: true
  }
})

io.on('connection', (socket) => {
  console.log('Socket connected:', socket.id)
  socket.on('disconnect', () => console.log('Socket disconnected:', socket.id))
})

if (process.env.MONGO_URI) {
  connectDB().catch((err) => console.error('MongoDB connection error:', err))
}

httpServer.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
