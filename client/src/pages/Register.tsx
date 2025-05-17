import { useState } from "react";import { useNavigate } from "react-router-dom";import api from "../api";import auth from "../store/auth";
export default function Register(){
  const nav=useNavigate();const [email,setEmail]=useState("");const [password,setPassword]=useState("");
  const submit=async(e)=>{e.preventDefault();const {data}=await api.post("/auth/register",{email,password});auth.getState().login(data.user,data.accessToken);nav("/profile");};
  return(<form onSubmit={submit} className="flex flex-col items-center justify-center h-screen gap-2">
    <h1 className="text-2xl font-bold">Register</h1>
    <input className="border p-2" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)}/>
    <input className="border p-2" placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)}/>
    <button className="bg-blue-600 text-white p-2 rounded">Create</button>
  </form>);
}
