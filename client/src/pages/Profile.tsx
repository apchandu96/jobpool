import { useParams } from 'react-router-dom'

export default function Profile() {
  const { id } = useParams()
  // TODO: fetch profile by id
  return <div className="container mx-auto p-4">Profile {id}</div>
}
