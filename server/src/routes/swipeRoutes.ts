import { Router } from "express";
import { doSwipe, interested } from "../controllers/swipeController";
import { requireAuth } from "../middlewares/authMiddleware";
const r = Router();
r.post("/", requireAuth(["staff"]), doSwipe);
r.get("/interested", requireAuth(["staff"]), interested);
export default r;
