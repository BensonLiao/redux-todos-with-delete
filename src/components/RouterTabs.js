import React from "react";
import {withRouter} from "react-router";
import {Route, Switch, Link} from "react-router-dom";
import {Paper, Tab, Tabs} from '@material-ui/core';
import {makeStyles, useTheme} from "@material-ui/core/styles";
import {useAuth} from './App'
import Home from './Home';
import Profile from './Profile';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import TodoListFilter from './TodoListFilter';

const useStyles = makeStyles({
  root: props => ({
    flexGrow: 1,
    borderRadius: 4,
    border: `1px solid ${props.palette.primary.main}`
  }),
  tab: props => ({
    color: props.palette.text.primary,
    '&:hover': {
      color: props.palette.primary.main,
      backgroundColor: props.palette.action.hover
    }
  })
});

const PrivateRoute = ({ component, ...rest }) => {
  const auth = useAuth();
  return (
    <Route
      {...rest}
      component={auth.user ? component : null}
    />
  );
}

const TodoList = () => {
  return (
    <>
      <AddTodo />
      <TodoListFilter />
      <VisibleTodoList />
    </>
  )
}
  
const RouterTabs = withRouter(({location}) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  return (
    <>
      <Paper className={classes.root}>
        <Tabs
          value={location.pathname !== '/' ? location.pathname : false}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab className={classes.tab} label="Home" component={Link} to="/home" value='/home'/>
          <Tab className={classes.tab} label="Profile" component={Link} to="/profile" value='/profile'/>
          <Tab className={classes.tab} label="Todo List" component={Link} to="/todolist" value='/todolist'/>
        </Tabs>
      </Paper>

      <Switch>
        <PrivateRoute path="/home" component={Home}/>
        <PrivateRoute path="/profile" component={Profile}/>
        <PrivateRoute path="/todolist" component={TodoList}/>
      </Switch>
    </>
  );
});

export default RouterTabs;