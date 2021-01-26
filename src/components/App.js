import React from 'react'
import {Container} from '@material-ui/core'
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import TodoListFilter from './TodoListFilter'

const App = () => {
  const theme = createMuiTheme();
  return (
    <Container maxWidth='sm'>
      <ThemeProvider theme={theme}>
        <AddTodo />
        <TodoListFilter />
        <VisibleTodoList />
      </ThemeProvider>
    </Container>
  )
}

export default App
