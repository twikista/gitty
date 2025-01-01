'use client'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Input } from '@/components/ui/input'
import Footer from './Footer'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'
import Spinner from './Spinner'
import RenderError from './RenderError'

export default function ReposList({ repoList, isLoading, error }) {
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')
  const reposPerPage = 10
  const searchResult = repoList.filter((repo) =>
    repo.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const startIndex = (currentPage - 1) * reposPerPage
  const lastIndex = currentPage * reposPerPage

  const currentRepos = searchResult.length
    ? searchResult.slice(startIndex, lastIndex)
    : repoList.slice(startIndex, lastIndex)

  // const paginate = (pageNumber) => setCurrentPage(pageNumber)

  //conditionally render loading state
  if (isLoading) {
    return <Spinner text='Getting repositories...' />
  }

  //conditionally render error
  if (error) {
    console.log(error)
    return (
      <RenderError
        errorMessage='Something went wrong. Try again'
        showButton={false}
      />
    )
  }

  //render fetched repos

  return (
    <div className='flex flex-col max-w-3xl gap-5 py-10 mx-auto'>
      <Card>
        <CardHeader className='py-3 space-y-2'>
          <CardTitle className=''>List of Repositories</CardTitle>
          <Input
            placeholder='Search repositiories by name'
            onChange={(e) => setSearchTerm(e.target.value)}
            className='mt-2 max-w-96'
          />
        </CardHeader>
        <CardContent>
          <Card>
            <ul className='flex flex-col'>
              {currentRepos.map((repo) => (
                <li
                  key={repo.id}
                  className='flex items-center px-3 py-2 font-medium border-b last-of-type:border-b-0 group hover:bg-zinc-200'
                >
                  <Link
                    to={repo.name}
                    className='capitalize group-hover:text-indigo-500'
                  >
                    {repo.name}
                  </Link>
                  {/* <Separator
                    className={cn(
                      idx === currentRepos.length - 1 ? 'hidden' : 'block'
                    )}
                  /> */}
                </li>
              ))}
            </ul>
          </Card>
        </CardContent>
        <CardFooter>
          <Footer
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            reposPerPage={reposPerPage}
            totalRepos={repoList.length}
          />
        </CardFooter>
      </Card>
    </div>
  )
}

ReposList.propTypes = {
  repoList: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string,
}
