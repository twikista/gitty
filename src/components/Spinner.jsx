import { cn } from '@/lib/utils'
import PropTypes from 'prop-types'

export default function Spinner({ text }) {
  return (
    <div className='flex h-screen place-content-center'>
      <div className='flex items-center gap-2 bg-transparent'>
        <i
          className={cn(
            `border-[3px] inline-block border-black/40 w-6 h-6 border-t-[3px] border-t-black rounded-full animate-spin`
          )}
        />
        <span className={`text-black`}>{text}</span>
      </div>
    </div>
  )
}

Spinner.propTypes = {
  text: PropTypes.string,
}
