type CandidateCardProps = {
  name: string
  title: string
  skills: string[]
  experience: number
  location: string
  availability: string
  onInterested: () => void
  onNotInterested: () => void
}

export default function CandidateCard(props: CandidateCardProps) {
  return (
    <div className="rounded-2xl shadow p-4 bg-white flex flex-col gap-2">
      <div className="text-xl font-semibold">{props.name}</div>
      <div className="text-sm text-gray-600">{props.title}</div>
      <div className="flex flex-wrap gap-1">
        {props.skills.slice(0, 3).map((skill) => (
          <span key={skill} className="px-2 py-1 rounded bg-slate-100 text-xs">
            {skill}
          </span>
        ))}
      </div>
      <div className="text-xs text-gray-500">
        {props.experience} yrs • {props.location}
      </div>
      <div className="mt-auto flex gap-2">
        <button
          className="flex-1 py-2 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-600 text-sm"
          onClick={props.onNotInterested}
        >
          Not Interested
        </button>
        <button
          className="flex-1 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm"
          onClick={props.onInterested}
        >
          Interested
        </button>
      </div>
    </div>
  )
}
