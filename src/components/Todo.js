import React from 'react'
import PropTypes from 'prop-types'
import {ListItemText} from '@material-ui/core'

const Todo = ({ onClick, completed, text }) => (
  <ListItemText
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
    primary={text}
  />
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
