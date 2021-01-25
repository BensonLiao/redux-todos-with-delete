import React from 'react'
import PropTypes from 'prop-types'
import DeleteIcon from '@material-ui/icons/Delete';
import {ListItemSecondaryAction, IconButton} from '@material-ui/core'

const TodoDelete = ({ onClick }) => (
  <ListItemSecondaryAction 
    onClick={onClick}
  >
    <IconButton edge="end" aria-label="delete">
      <DeleteIcon />
    </IconButton>
  </ListItemSecondaryAction>
)

TodoDelete.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default TodoDelete
