export default function FilterBar({ onChange }:{ onChange:(p:any)=>void }){
  const handle=e=>onChange({[e.target.name]:e.target.value});
  return(<div className="flex gap-2"><input name="skills" placeholder="Skill" onChange={handle} className="border p-2"/><input name="location" placeholder="Location" onChange={handle} className="border p-2"/></div>);
}
