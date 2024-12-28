import { Outlet } from 'react-router-dom'
import { IoGitMergeOutline } from 'react-icons/io5'

export default function Layout() {
  return (
    <div className='box-border w-full h-full min-h-screen'>
      <header className='flex px-4 py-2 bg-black border-b'>
        <div className='flex items-center px-2 py-1 gap-0.5'>
          <h1 className='text-2xl font-medium text-gray-300 font-Space-Grotesk'>
            gitly
          </h1>
          <IoGitMergeOutline className='text-gray-300 size-5' />
        </div>
      </header>
      <main className='px-4'>
        <Outlet />
      </main>
    </div>
  )
}
