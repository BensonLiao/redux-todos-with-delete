import React from 'react'
import PropTypes from 'prop-types'
import {List} from '@material-ui/core'
import Todo from '../containers/Todo'

const TodoList = ({ todos }) => (
  <List>
    {todos.map(todo =>
      <Todo key={todo.id} todo={todo}/>
    )}
  </List>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default TodoList
