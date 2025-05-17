import { useState } from "react";
import api from "../api";
export default function Wizard(){
  const [step,set]=useState(1);const [form,setForm]=useState<any>({});
  const change=e=>setForm({...form,[e.target.name]:e.target.value});
  const save=async()=>{await api.post("/profiles",form);alert("Saved!");};
  return(<div className="max-w-xl mx-auto p-4"><h1 className="text-xl font-bold mb-4">Profile</h1>
    {step===1&&<><input name="headline" placeholder="Headline" className="border p-2 w-full" onChange={change}/>
    <textarea name="bio" placeholder="Bio" className="border p-2 w-full mt-2" onChange={change}/></>}
    {step===2&&<><input name="skills" placeholder="Skills comma" className="border p-2 w-full" onChange={change}/>
    <input name="location" placeholder="Location" className="border p-2 w-full mt-2" onChange={change}/></>}
    <div className="flex justify-between mt-4">{step>1&&<button onClick={()=>set(step-1)} className="border p-2">Back</button>}
    {step<2&&<button onClick={()=>set(step+1)} className="border p-2">Next</button>}
    {step===2&&<button onClick={save} className="bg-blue-600 text-white p-2 rounded">Finish</button>}</div></div>);
}
