import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import {makeStyles, Paper, InputBase, IconButton} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: `${theme.spacing(.25)}px ${theme.spacing(.5)}px`,
    display: 'flex',
    alignItems: 'center'
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  }
}));

const AddTodo = ({ dispatch }) => {
  const classes = useStyles();
  let input

  return (
    <div>
      <Paper 
        component="form"
        className={classes.root}
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}
      >
        <InputBase
          className={classes.input}
          placeholder="Please type a todo title"
        />
        <IconButton type="submit" aria-label="add">
          <AddCircleIcon />
        </IconButton>
      </Paper>
    </div>
  )
}

export default connect()(AddTodo)
