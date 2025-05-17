import mongoose from "mongoose";
import bcrypt from "bcrypt";

const schema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  passwordHash: String,
  role: { type: String, enum: ["candidate", "staff", "admin"], default: "candidate" },
  oauthProvider: String,
  oauthId: String
}, { timestamps: true });

schema.methods.comparePassword = function(pwd: string) {
  return bcrypt.compare(pwd, this.passwordHash);
};

export default mongoose.model("User", schema);
