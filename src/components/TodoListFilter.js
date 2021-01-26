import React from 'react'
import {Box} from '@material-ui/core'
import FilterButton from '../containers/FilterButton'
import {VisibilityFilters} from '../actions'

const TodoListFilter = () => (
  <Box component='div' m={1}>
    <span>Show: </span>
    <FilterButton filter={VisibilityFilters.SHOW_ALL}>
      All
    </FilterButton>
    <FilterButton filter={VisibilityFilters.SHOW_ACTIVE}>
      Active
    </FilterButton>
    <FilterButton filter={VisibilityFilters.SHOW_COMPLETED}>
      Completed
    </FilterButton>
  </Box>
)

export default TodoListFilter
