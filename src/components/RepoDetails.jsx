import { useParams } from 'react-router-dom'

export default function RepoDetails() {
  const params = useParams()
  console.log(params)
  return <div>{params.repoId}</div>
}
