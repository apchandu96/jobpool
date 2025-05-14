// Example script to create indexes. Run with: `node scripts/init-db.js`
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import Profile from '../src/models/Profile.js'

dotenv.config()
const uri = process.env.MONGO_URI
if (!uri) throw new Error('MONGO_URI not set')
await mongoose.connect(uri)
await Profile.syncIndexes()
console.log('Indexes synced')
process.exit(0)
