'use client'

import { useNavigate, useParams } from 'react-router-dom'
import { Button } from './ui/button'
import { Octokit, RequestError } from 'octokit'
import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import {
  CalendarDays,
  CalendarClock,
  Eye,
  GitFork,
  Star,
  GitCompare,
  FileJson2,
  ExternalLink,
  ArrowLeft,
} from 'lucide-react'
import { formatDate } from '@/util'
import DateItem from './DateItem'
import MetadataItem from './Metadataitem'
import Spinner from './Spinner'
import RenderError from './RenderError'

export default function RepoDetails() {
  const [repo, setRepo] = useState({})
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const repoName = useParams().repo_name
  const navigate = useNavigate()

  useEffect(() => {
    //instantiate octokit
    const octokit = new Octokit({
      auth: import.meta.env.VITE_ACCESS_TOKEN,
    })
    //Definne function that fetch repositiory
    const getRepo = async () => {
      setIsLoading(true)
      try {
        const repo = await octokit.request('GET /repos/{owner}/{repo}', {
          owner: import.meta.env.VITE_USERNAME,
          repo: repoName,
          headers: {
            'X-GitHub-Api-Version': '2022-11-28',
          },
        })
        setError(null)
        setRepo(repo.data)
        setIsLoading(false)
      } catch (error) {
        if (error instanceof RequestError) {
          console.log(error.message)
          setError(error.message)
          setIsLoading(false)
        } else {
          // handle all other errors
          setError('something went wrong')
          setIsLoading(false)
        }
      }
    }

    getRepo()
  }, [repoName])

  if (isLoading) return <Spinner text='Getting repository details...' />
  if (error) return <RenderError errorMessage={error} />

  return (
    <div className='flex flex-col max-w-3xl gap-5 py-10 mx-auto'>
      <Button
        variant='secondary'
        type='button'
        onClick={() => navigate(-1)}
        className='transition-colors duration-200 w-fit hover:bg-zinc-300'
      >
        <ArrowLeft />
        Back
      </Button>

      <Card className='flex flex-col flex-1 place-content-center'>
        <CardHeader>
          <div className='flex items-center gap-1'>
            <CardTitle className='capitalize'>{repo?.name}</CardTitle>
            <span className='px-2.5 py-0.5 capitalize text-sm border-2 text-zinc-400 rounded-2xl'>
              {repo?.visibility}
            </span>
          </div>
        </CardHeader>
        <Separator />
        <CardContent>
          <div className='flex flex-col justify-between gap-10 py-5 md:flex-row'>
            <div className='flex flex-col justify-center gap-4 min-w-60'>
              <DateItem
                label='Date created:'
                value={repo?.created_at}
                icon={<CalendarDays className='size-5' />}
                formatDate={formatDate}
              />
              <DateItem
                label='Date last updated:'
                value={repo?.updated_at}
                icon={<CalendarClock className='size-5' />}
                formatDate={formatDate}
              />
              <div className='flex flex-col gap-1'>
                <h3 className='flex items-center gap-1 text-base font-medium text-zinc-700'>
                  <FileJson2 className='size-5' />
                  <span>languages:</span>
                </h3>
                <p className='text-sm text-zinc-500'>{repo?.language}</p>
              </div>
              <Button asChild>
                <a
                  href={repo?.html_url}
                  target='_blank'
                  className='hover:bg-indigo-600'
                >
                  <span>View Repo</span>
                  <ExternalLink className='size-5' />
                </a>
              </Button>
            </div>
            <Card className='flex-1 w-full md:max-w-96 text-zinc-500'>
              <MetadataItem
                label='Watching'
                value={repo?.watchers}
                icon={<Eye className='size-5' />}
              />
              <Separator />
              <div className='flex items-center justify-between px-4 py-3'>
                <div className='flex items-center gap-2'>
                  <GitFork className='size-5' />
                  <span>Forks</span>
                </div>
                <span>{repo?.watchers}</span>
              </div>
              <Separator />
              <MetadataItem
                label='Stars'
                value={repo?.stargazers_count}
                icon={<Star className='size-5' />}
              />
              <Separator />
              <MetadataItem
                label='Open issues'
                value={repo?.open_issues}
                icon={<GitCompare className='size-5' />}
              />
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
