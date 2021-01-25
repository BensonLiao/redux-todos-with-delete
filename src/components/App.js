import React from 'react'
import Footer from './Footer'
import {Container} from '@material-ui/core'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <Container maxWidth='sm'>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </Container>
)

export default App
