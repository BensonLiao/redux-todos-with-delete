import uuidv1 from 'uuid/v1'

export const addTodo = (text, uuidv1option = {}) => ({
  type: 'ADD_TODO',
  id: uuidv1(uuidv1option),
  text
})

export const deleteTodo = deleteTodoId => ({
  type: 'DELETE_TODO',
  id: deleteTodoId
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
