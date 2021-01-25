import React from 'react'
import TodoListFilter from './TodoListFilter'
import {Container} from '@material-ui/core'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => {
  console.log('hi');
  return (
  <Container maxWidth='sm'>
    <AddTodo />
    <TodoListFilter />
    <VisibleTodoList />
  </Container>
)}

export default App
