import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import ReposList from './components/ReposList'
import RepoDetails from './components/RepoDetails'
import { useEffect, useState } from 'react'
import { Octokit, RequestError } from 'octokit'
import NotFound from './components/NotFound'
import ErrorBoundry from './components/ErrorBoundry'
import TestErrorBoundary from './components/TestErrorBoundary'

function App() {
  const [repoList, setRepoList] = useState([])
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    //instantiate octokit
    const octokit = new Octokit({
      auth: import.meta.env.VITE_ACCESS_TOKEN,
    })

    //define function to fetch repositories
    const getRepos = async () => {
      setIsLoading(true)
      try {
        const repos = await octokit.paginate('GET /users/{username}/repos', {
          username: import.meta.env.VITE_USERNAME,
          per_page: 100,
          headers: {
            'X-GitHub-Api-Version': '2022-11-28',
          },
        })
        setError(null)
        setRepoList(repos)
        setIsLoading(false)
      } catch (error) {
        if (error instanceof RequestError) {
          setError(error.message)
          setIsLoading(false)
        } else {
          // handle all other errors
          setError('something went wrong')
          setIsLoading(false)
        }
      }
    }

    getRepos()
  }, [])

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route
          index
          element={
            <ReposList
              repoList={repoList}
              isLoading={isLoading}
              error={error}
            />
          }
        />
        <Route path=':repo_name' element={<RepoDetails repos={repoList} />} />
      </Route>
      <Route
        path='/error/boundary'
        element={
          <ErrorBoundry>
            <TestErrorBoundary />
          </ErrorBoundry>
        }
      />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App
