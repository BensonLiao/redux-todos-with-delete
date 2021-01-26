import React, {useState, useCallback} from 'react'
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
  const [totoTitle, setTodoTitle] = useState('');
  const changeTodoListTitle = useCallback(event => {
    setTodoTitle(event.target.value);
  }, []);

  return (
    <Paper 
      component="form"
      className={classes.root}
      onSubmit={() => dispatch(addTodo(totoTitle))}
    >
      <InputBase
        className={classes.input}
        placeholder="Please type a todo title"
        defaultValue={totoTitle}
        onChange={changeTodoListTitle}
      />
      <IconButton type="submit" aria-label="add">
        <AddCircleIcon />
      </IconButton>
    </Paper>
  );
}

export default connect()(AddTodo);
