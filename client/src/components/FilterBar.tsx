type FilterBarProps = {
  onChange: (filters: Record<string, string>) => void
}

export default function FilterBar({ onChange }: FilterBarProps) {
  // TODO: implement real filter controls, right now just a stub
  return (
    <div className="bg-white shadow rounded-2xl p-4 mb-4">
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Search candidates..."
          className="flex-1 input input-bordered"
          onChange={(e) => onChange({ q: e.target.value })}
        />
        <button className="btn btn-outline">Filters</button>
      </div>
    </div>
  )
}
