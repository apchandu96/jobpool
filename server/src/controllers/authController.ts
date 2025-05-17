import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User";

const tokens = (u: any) => {
  const p = { id: u._id, role: u.role };
  return {
    accessToken: jwt.sign(p, process.env.JWT_SECRET as string, { expiresIn: "15m" }),
    refreshToken: jwt.sign(p, process.env.JWT_REFRESH_SECRET as string, { expiresIn: "7d" })
  };
};

export const register = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const existing = await User.findOne({ email });
  if (existing) return res.status(400).json({ message: "Email used" });
  const user = await User.create({ email, passwordHash: await bcrypt.hash(password, 10) });
  res.status(201).json({ user, ...tokens(user) });
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user: any = await User.findOne({ email });
  if (!user || !(await user.comparePassword(password)))
    return res.status(400).json({ message: "Invalid" });
  res.json({ user, ...tokens(user) });
};
