import mongoose from "mongoose";
const schema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  headline: String, bio: String, location: String,
  availability: String, salaryExpectation: String,
  skills: [String], industries: [String],
  workHistory: [{ company: String, role: String, start: Date, end: Date }],
  education: [{ school: String, degree: String, year: Number }],
  portfolioLinks: [String],
  profilePicUrl: String,
  completion: { type: Number, default: 0 }
}, { timestamps: true });

export default mongoose.model("Profile", schema);
