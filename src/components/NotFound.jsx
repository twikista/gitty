import { Bird } from 'lucide-react'
import { Button } from './ui/button'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

export default function NotFound() {
  return (
    <main className='items-center justify-center h-screen p-4'>
      <div className='flex flex-col items-center justify-center h-full gap-3'>
        <div className='flex flex-col items-center justify-center'>
          <Bird className=' size-20 md:size-52' />
          <span className='font-medium md:text-2xl'>You are alone here! </span>
        </div>
        <Button
          asChild
          className={cn('w-full sm:max-w-32 text-center hover:bg-indigo-500')}
        >
          <Link to='/'>Back to home</Link>
        </Button>
      </div>
    </main>
  )
}
