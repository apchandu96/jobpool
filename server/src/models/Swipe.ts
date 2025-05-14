import { Schema, model, Document, Types } from 'mongoose'

export interface ISwipe extends Document {
  staffId: Types.ObjectId
  candidateId: Types.ObjectId
  status: 'interested' | 'not_interested' | 'maybe'
}

const swipeSchema = new Schema<ISwipe>({
  staffId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  candidateId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  status: { type: String, enum: ['interested', 'not_interested', 'maybe'], required: true }
}, { timestamps: true })

export default model<ISwipe>('Swipe', swipeSchema)
