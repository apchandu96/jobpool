import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Browse from "./pages/Browse";
import ProfileWizard from "./pages/ProfileWizard";
import Chat from "./pages/Chat";
import useAuth from "./store/auth";
export default function App() {
  const { user } = useAuth();
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/browse" element={<Browse />} />
      <Route path="/profile" element={<ProfileWizard />} />
      <Route path="/chat/:threadId" element={<Chat />} />
      <Route path="/" element={<Navigate to={user ? "/browse" : "/login"} />} />
    </Routes>
  );
}
