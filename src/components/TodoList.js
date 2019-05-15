import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'
import TodoDelete from './TodoDelete'

const TodoList = ({ todos, toggleTodo, deleteTodo }) => (
  <ul>
    {todos.map(todo =>
      <div
        key={todo.id}
        style={{
          display: 'flex',
          margin: '4px'
        }}
      >
        <Todo
          {...todo}
          onClick={() => toggleTodo(todo.id)}
        />
        <TodoDelete
          onClick={() => deleteTodo(todo.id)}
        />
      </div>
    )}
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
}

export default TodoList
