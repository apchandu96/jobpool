import mongoose from "mongoose";
export default mongoose.model("ChatThread", new mongoose.Schema({
  participantIds: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }]
}, { timestamps: true }));
