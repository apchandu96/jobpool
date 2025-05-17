import { create } from "zustand";
interface State { user: any|null; token: string|null; login:(u:any,t:string)=>void; logout:()=>void }
export default create<State>((set)=>({
  user: JSON.parse(localStorage.getItem("user")||"null"),
  token: localStorage.getItem("token"),
  login:(u,t)=>{ localStorage.setItem("user",JSON.stringify(u)); localStorage.setItem("token",t); set({user:u,token:t}); },
  logout:()=>{ localStorage.clear(); set({user:null,token:null}); }
}));
