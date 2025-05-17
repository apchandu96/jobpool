import { Response } from "express";
import ChatThread from "../models/ChatThread";
import ChatMessage from "../models/ChatMessage";
import { AuthReq } from "../middlewares/authMiddleware";

export const thread = async (req: AuthReq, res: Response) => {
  const { participantId } = req.body;
  let t = await ChatThread.findOne({ participantIds: { $all: [req.user.id, participantId] } });
  if (!t) t = await ChatThread.create({ participantIds: [req.user.id, participantId] });
  res.json(t);
};

export const messages = async (req: AuthReq, res: Response) => {
  res.json(await ChatMessage.find({ threadId: req.params.threadId }).sort({ createdAt: 1 }));
};
