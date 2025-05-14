import { useEffect, useState } from 'react'
import axios from '../api/axios'
import CandidateCard from '../components/CandidateCard'
import FilterBar from '../components/FilterBar'

type Candidate = {
  _id: string
  name: string
  title: string
  skills: string[]
  experience: number
  location: string
  availability: string
}

export default function Browse() {
  const [candidates, setCandidates] = useState<Candidate[]>([])

  const fetchCandidates = async (params = {}) => {
    const { data } = await axios.get('/profile', { params })
    setCandidates(data)
  }

  useEffect(() => {
    fetchCandidates()
  }, [])

  return (
    <div className="container mx-auto p-4">
      <FilterBar onChange={fetchCandidates} />
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {candidates.map((c) => (
          <CandidateCard
            key={c._id}
            name={c.name}
            title={c.title}
            skills={c.skills}
            experience={c.experience}
            location={c.location}
            availability={c.availability}
            onInterested={() => {}}
            onNotInterested={() => {}}
          />
        ))}
      </div>
    </div>
  )
}
