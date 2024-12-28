import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'

export default function RenderError({ errorMessage, showButton = true }) {
  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='flex flex-col items-center justify-center gap-2'>
        <span>{errorMessage}</span>
        <Button
          asChild
          className={cn(
            'w-full md:max-w-32 text-center',
            showButton ? 'block' : 'hidden'
          )}
        >
          <Link to='/'>Back to home</Link>
        </Button>
      </div>
    </div>
  )
}

RenderError.propTypes = {
  errorMessage: PropTypes.string,
  showButton: PropTypes.bool,
}
