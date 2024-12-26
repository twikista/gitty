import { Link } from 'react-router-dom'

const repos = [
  {
    id: '001',
    label: 'repo 1',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, consequatur.',
  },
  {
    id: '002',
    label: 'repo 2',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, consequatur.',
  },
]

export default function ReposList() {
  return (
    <div>
      <ul>
        {repos.map((repo) => (
          <Link key={repo.id} to={repo.id}>
            {repo.label}
          </Link>
        ))}
      </ul>
    </div>
  )
}
