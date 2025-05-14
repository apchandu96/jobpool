import { Schema, model, Document } from 'mongoose'

export interface IUser extends Document {
  email: string
  passwordHash: string
  role: 'candidate' | 'staff' | 'admin'
  oauthProvider?: string
  oauthId?: string
}

const userSchema = new Schema<IUser>({
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  role: { type: String, enum: ['candidate', 'staff', 'admin'], default: 'candidate' },
  oauthProvider: String,
  oauthId: String
}, { timestamps: true })

export default model<IUser>('User', userSchema)
