import { Outlet } from 'react-router-dom'
import { IoGitMergeOutline } from 'react-icons/io5'

export default function Layout() {
  return (
    <div>
      <header className='px-8 py-4'>
        <div>
          <h1>Gitty</h1>
          <IoGitMergeOutline />
        </div>
      </header>
      <mian>
        <Outlet />
      </mian>
    </div>
  )
}
