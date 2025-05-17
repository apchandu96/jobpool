export default function Card({p}:{p:any}){
  return(<div className="bg-white shadow rounded p-3"><img src={p.profilePicUrl||'https://placehold.co/300'} className="w-full h-40 object-cover rounded"/><h2 className="font-semibold mt-2">{p.headline}</h2><p className="text-sm">{p.skills?.slice(0,3).join(", ")}</p></div>);
}
