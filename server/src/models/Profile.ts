import { Schema, model, Document, Types } from 'mongoose'

export interface IProfile extends Document {
  userId: Types.ObjectId
  headline: string
  bio: string
  location: string
  availability: string
  salaryExpectation: string
  skills: string[]
  industries: string[]
  workHistory: Array<Record<string, any>>
  education: Array<Record<string, any>>
  portfolioLinks: string[]
  profilePicUrl: string
  completion: number
}

const profileSchema = new Schema<IProfile>({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  headline: String,
  bio: String,
  location: String,
  availability: String,
  salaryExpectation: String,
  skills: [String],
  industries: [String],
  workHistory: [Schema.Types.Mixed],
  education: [Schema.Types.Mixed],
  portfolioLinks: [String],
  profilePicUrl: String,
  completion: Number
}, { timestamps: true })

profileSchema.index({ skills: 'text', industries: 'text', location: 'text' })

export default model<IProfile>('Profile', profileSchema)
