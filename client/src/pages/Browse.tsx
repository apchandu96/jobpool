import { useEffect, useState } from "react";
import api from "../api";
import FilterBar from "../components/FilterBar";
import Card from "../components/Card";
export default function Browse(){
  const [profiles,set]=useState<any[]>([]);
  const fetch=async(q={})=>{const {data}=await api.get("/profiles",{params:q});set(data);};
  useEffect(()=>{fetch();},[]);
  return(<div className="p-4"><FilterBar onChange={fetch}/><div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4">{profiles.map(p=><Card key={p._id} p={p}/>)}</div></div>);
}
