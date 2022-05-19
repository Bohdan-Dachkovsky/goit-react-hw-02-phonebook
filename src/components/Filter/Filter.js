import React from 'react'
import PropTypes from 'prop-types'

export default function Filter({ value, onChangeFilter }) {
  return (
    <div>
      Find contacts by name
      <input
        type="text"
        value={value}
        onChange={(e) => onChangeFilter(e.target.value)}
      />
    </div>
  )
}

Filter.defaultProps = {
  onchangeFilter: [],
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onchangeFilter: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
}
