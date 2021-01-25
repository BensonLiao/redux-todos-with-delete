import React from 'react'
import {Box} from '@material-ui/core'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../actions'

const TodoListFilter = () => (
  <Box component='div' m={1}>
    <span>Show: </span>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>
      All
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
      Active
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
      Completed
    </FilterLink>
  </Box>
)

export default TodoListFilter
