import React from 'react'
import PropTypes from 'prop-types'
import {List, ListItem} from '@material-ui/core'
import Todo from './Todo'
import TodoDelete from './TodoDelete'

const TodoList = ({ todos, toggleTodo, deleteTodo }) => (
  <List>
    {todos.map(todo =>
      <ListItem
        key={todo.id}
        button
      >
        <Todo
          {...todo}
          onClick={() => toggleTodo(todo.id)}
        />
        <TodoDelete
          onClick={() => deleteTodo(todo.id)}
        />
      </ListItem>
    )}
  </List>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
}

export default TodoList
