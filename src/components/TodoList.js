import React from 'react'
import PropTypes from 'prop-types'
import {makeStyles, List} from '@material-ui/core'
import Todo from '../containers/Todo'

const useStyles = makeStyles({
  list: () => ({
    borderRadius: 4,
    border: 0,
  }),
});

const TodoList = ({ todos }) => {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      {todos.map(todo =>
        <Todo key={todo.id} todo={todo}/>
      )}
    </List>
  )
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default TodoList
