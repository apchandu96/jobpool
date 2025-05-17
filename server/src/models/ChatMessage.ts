import mongoose from "mongoose";
export default mongoose.model("ChatMessage", new mongoose.Schema({
  threadId: { type: mongoose.Schema.Types.ObjectId, ref: "ChatThread" },
  senderId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  body: String,
  fileUrl: String,
  read: { type: Boolean, default: false }
}, { timestamps: true }));
