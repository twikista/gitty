import PropTypes from 'prop-types'

export default function DateItem({ formatDate, icon, value, label }) {
  return (
    <div>
      <h3 className='flex items-center gap-1 text-base font-medium text-zinc-700'>
        {icon}
        <span>{label}</span>
      </h3>
      <p className='text-sm text-zinc-500'>{formatDate(value)}</p>
    </div>
  )
}

DateItem.propTypes = {
  label: PropTypes.string,
  value: PropTypes.any,
  icon: PropTypes.any,
  formatDate: PropTypes.func,
}
