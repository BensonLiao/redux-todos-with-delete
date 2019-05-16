import * as actions from './index'
import uuidv1 from 'uuid/v1'

// Verify ordering of v1 ids created with explicit times
const uuidv1option = {
  node: [0x01, 0x23, 0x45, 0x67, 0x89, 0xab],
  clockseq: 0x1234,
  msecs: 1321644961388, // 2011-11-18 11:36:01.388-08:00
  nsecs: 5678
}
const deleteTodoId = '0'

describe('todo actions', () => {
  it('addTodo should create ADD_TODO action', () => {
    expect(actions.addTodo('Use Redux', uuidv1option)).toEqual({
      type: 'ADD_TODO',
      id: uuidv1(uuidv1option),
      text: 'Use Redux'
    })
  })

  it('deleteTodo should create DELETE_TODO action', () => {
    expect(actions.deleteTodo(deleteTodoId)).toEqual({
      type: 'DELETE_TODO',
      id: deleteTodoId
    })
  })

  it('setVisibilityFilter should create SET_VISIBILITY_FILTER action', () => {
    expect(actions.setVisibilityFilter('active')).toEqual({
      type: 'SET_VISIBILITY_FILTER',
      filter: 'active'
    })
  })

  it('toggleTodo should create TOGGLE_TODO action', () => {
    expect(actions.toggleTodo('1')).toEqual({
      type: 'TOGGLE_TODO',
      id: '1'
    })
  })
})
