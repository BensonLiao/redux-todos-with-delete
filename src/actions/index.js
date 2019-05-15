let nextTodoId = 0
let deletedTodoId = []
let addTodoWithMemo = () => {
  return deletedTodoId.length > 0 ? deletedTodoId.shift() : ++nextTodoId
}

const deleteTodoWithMemo = deleteTodoId => {
  deletedTodoId.push(deleteTodoId)
  return deleteTodoId
}

export const addTodo = text => ({
  type: 'ADD_TODO',
  id: addTodoWithMemo(),
  text
})

export const deleteTodo = deleteTodoId => ({
  type: 'DELETE_TODO',
  id: deleteTodoWithMemo(deleteTodoId)
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
