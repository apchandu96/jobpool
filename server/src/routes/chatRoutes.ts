import { Router } from "express";
import { thread, messages } from "../controllers/chatController";
import { requireAuth } from "../middlewares/authMiddleware";
const r = Router();
r.post("/thread", requireAuth(), thread);
r.get("/:threadId", requireAuth(), messages);
export default r;
