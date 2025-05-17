import mongoose from "mongoose";
const schema = new mongoose.Schema({
  staffId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  candidateId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  status: { type: String, enum: ["interested", "not_interested", "maybe"] }
}, { timestamps: true });

export default mongoose.model("Swipe", schema);
