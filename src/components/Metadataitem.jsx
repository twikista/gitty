import PropTypes from 'prop-types'

export default function MetadataItem({ label, value, icon }) {
  return (
    <div className='flex items-center justify-between px-4 py-3'>
      <div className='flex items-center gap-2'>
        {icon}
        <span>{label}</span>
      </div>
      <span>{value}</span>
    </div>
  )
}

MetadataItem.propTypes = {
  label: PropTypes.string,
  value: PropTypes.number,
  icon: PropTypes.any,
}
