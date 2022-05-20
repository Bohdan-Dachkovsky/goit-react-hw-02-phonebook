import React from 'react'
import PropTypes from 'prop-types'

export default function Filter({ input }) {
  return (
    <div>
      Find contacts by name
      <input type="text" onInput={input} placeholder="Search" />
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
