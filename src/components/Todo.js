import React from 'react'
import PropTypes from 'prop-types'
import {makeStyles, useTheme, ListItem, ListItemText} from '@material-ui/core'
import TodoDelete from './TodoDelete'

const useStyles = makeStyles({
  list: props => ({
    borderRadius: 4,
    border: 0,
    backgroundColor: props.completed ? props.palette.success.light : props.palette.info.light,
    color: props.palette.primary.contrastText,
    '&:hover': {
      color: props.palette.text.primary
    },
    '&:not(:first-child):not(:last-child)': {
      borderRadius: 0,
    },
    '&:first-child': {
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
    },
    '&:last-child': {
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0
    }
  }),
});

const Todo = ({ todo: { id, completed, text }, toggleTodo, deleteTodo }) => {
  const theme = useTheme();
  const classes = useStyles({completed, ...theme});

  return (
    <ListItem
      key={id}
      button
      className={classes.list}
      onClick={() => toggleTodo(id)}
    >
      <ListItemText
        style={{
          textDecoration: completed ? 'line-through' : 'none'
        }}
        primary={text}
      />
      <TodoDelete
        onClick={() => deleteTodo(id)}
      />
    </ListItem>
  )
}

Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
}

export default Todo
