import React from 'react'
import PropTypes from 'prop-types'

const TodoDelete = ({ onClick }) => (
  <button 
    type="submit" 
    onClick={onClick}
    style={{
      margin: '4px'
    }}
  >
    Delete
  </button>
)

TodoDelete.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default TodoDelete
