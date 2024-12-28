'use client'

import { useState } from 'react'
import { Button } from './ui/button'

export default function TestErrorBoundary() {
  const [isError, setIsEror] = useState(false)
  const handleClick = () => {
    console.log('i ran')
    setIsEror(true)
  }

  if (isError) {
    throw Error('ahhhhhhhhhhhhhhhhh')
  }
  console.log(isError)

  //   useState(() => {
  //     if (isError) {
  //       throw new Error('Test ErrorBoundary Error')
  //     }
  //   }, [isError])

  return (
    <main className='flex flex-col items-center justify-center h-screen gap-5'>
      <h1 className='text-xl font-medium'>
        Testing ErrorBoundry Implementation
      </h1>
      <div className='flex flex-col items-center justify-center space-y-1'>
        <p>
          click the button below to throw an error that triggers ErrorBoundry
        </p>
        <Button type='button' onClick={handleClick}>
          Throw Error
        </Button>
      </div>
    </main>
  )
}
