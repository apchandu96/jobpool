import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import io from "socket.io-client";
import api from "../api";
import auth from "../store/auth";
export default function Chat(){
  const {threadId}=useParams();const [msgs,set]=useState<any[]>([]);const [txt,setTxt]=useState("");
  useEffect(()=>{api.get("/chats/"+threadId).then(r=>set(r.data));},[threadId]);
  useEffect(()=>{const socket=io(import.meta.env.VITE_API_URL.replace("/api",""),{auth:{token:auth.getState().token}});
    socket.on("chat:message",(m)=>set(p=>[...p,m]));return()=>socket.disconnect();},[]);
  return(<div className="flex flex-col h-screen"><div className="flex-1 p-4 overflow-y-auto">{msgs.map(m=><div key={m._id}>{m.senderId}: {m.body}</div>)}</div>
    <div className="p-2 flex border-t"><input className="flex-1 border p-2" value={txt} onChange={e=>setTxt(e.target.value)}/>
    <button className="p-2 bg-blue-600 text-white">Send</button></div></div>);
}
