import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export interface AuthReq extends Request { user?: any }

export const requireAuth = (roles: string[] = []) =>
  (req: AuthReq, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "Unauth" });
    try {
      const user = jwt.verify(token, process.env.JWT_SECRET as string);
      req.user = user;
      if (roles.length && !roles.includes(user.role))
        return res.status(403).json({ message: "Forbidden" });
      next();
    } catch {
      return res.status(401).json({ message: "Bad token" });
    }
  };
