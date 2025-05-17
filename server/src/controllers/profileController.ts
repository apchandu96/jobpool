import { Response } from "express";
import Profile from "../models/Profile";
import { AuthReq } from "../middlewares/authMiddleware";

export const upsert = async (req: AuthReq, res: Response) => {
  const profile = await Profile.findOneAndUpdate(
    { userId: req.user.id }, req.body, { upsert: true, new: true });
  res.json(profile);
};

export const filter = async (req: AuthReq, res: Response) => {
  const q: any = {};
  if (req.query.skills) q.skills = { $in: req.query.skills.toString().split(",") };
  const profiles = await Profile.find(q).limit(50);
  res.json(profiles);
};
