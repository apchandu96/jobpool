import { Router } from "express";
import { upsert, filter } from "../controllers/profileController";
import { requireAuth } from "../middlewares/authMiddleware";
const r = Router();
r.get("/", filter);
r.post("/", requireAuth(["candidate"]), upsert);
export default r;
