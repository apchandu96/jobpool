import { Server } from "socket.io";
import jwt from "jsonwebtoken";

export const registerSocketHandlers = (io: Server) => {
  io.use((socket, next) => {
    const { token } = socket.handshake.auth;
    if (!token) return next(new Error("No token"));
    try {
      socket.data.user = jwt.verify(token, process.env.JWT_SECRET as string);
      next();
    } catch { next(new Error("Bad token")); }
  });

  io.on("connection", (socket) => {
    socket.join(socket.data.user.id);
    socket.on("chat:send", (msg) => {
      io.to(msg.threadId).emit("chat:message", msg);
    });
  });
};
