import React from "react";
import {withRouter} from "react-router";
import {Route, Switch, Link} from "react-router-dom";
import {Paper, Tab, Tabs} from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";
import {useAuth} from './App'
import Home from './Home';
import Profile from './Profile';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import TodoListFilter from './TodoListFilter';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
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
  const classes = useStyles();
  return (
    <>
      <Paper className={classes.root}>
        <Tabs
          value={location.pathname !== '/' ? location.pathname : false}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Home" component={Link} to="/home" value='/home'/>
          <Tab label="Profile" component={Link} to="/profile" value='/profile'/>
          <Tab label="Todo List" component={Link} to="/todolist" value='/todolist'/>
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