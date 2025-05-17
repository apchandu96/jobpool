import { Response } from "express";
import Swipe from "../models/Swipe";
import { AuthReq } from "../middlewares/authMiddleware";

export const doSwipe = async (req: AuthReq, res: Response) => {
  const { candidateId, status } = req.body;
  const rec = await Swipe.findOneAndUpdate(
    { staffId: req.user.id, candidateId }, { status },
    { upsert: true, new: true });
  res.json(rec);
};

export const interested = async (req: AuthReq, res: Response) => {
  res.json(await Swipe.find({ staffId: req.user.id, status: "interested" }));
};
