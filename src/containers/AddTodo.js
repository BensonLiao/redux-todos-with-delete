import React, {useRef} from 'react'
import {connect} from 'react-redux'
import {addTodo, setVisibilityFilter, VisibilityFilters} from '../actions'
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

const AddTodo = ({addTodo, showAllTodo}) => {
  const classes = useStyles();
  const inputRef = useRef();

  return (
    <Paper className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Please type a todo title"
        ref={inputRef}
      />
      <IconButton 
        aria-label="add"
        onClick={() => {
          inputRef.current && addTodo(inputRef.current.firstChild.value);
          showAllTodo();
        }}
      >
        <AddCircleIcon />
      </IconButton>
    </Paper>
  );
}

const mapDispatchToProps = dispatch => ({
  addTodo: title => dispatch(addTodo(title)),
  showAllTodo: () => dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ALL))
})

export default connect(
  null,
  mapDispatchToProps
)(AddTodo);