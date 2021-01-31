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

const PrivateRoute = ({ children, ...rest }) => {
  const auth = useAuth();
  return (
    <Route
      {...rest}
      render={() =>
        auth.user ? (
          children
        ) : null
      }
    />
  );
}
  
const RouterTabs = withRouter(({location}) => {
  const classes = useStyles();
  return (
    <>
    <Paper className={classes.root}>
      <Tabs
        value={location.pathname}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Home" component={Link} to="/" value='/'/>
        <Tab label="Profile" component={Link} to="/profile" value='/profile'/>
        <Tab label="Todo List" component={Link} to="/todolist" value='/todolist'/>
      </Tabs>
    </Paper>

    <Switch>
      <PrivateRoute path="/">
        <Home />
      </PrivateRoute>
      <PrivateRoute path="/profile">
        <Profile />
      </PrivateRoute>
      <PrivateRoute path="/todolist">
        <AddTodo />
        <TodoListFilter />
        <VisibleTodoList />
      </PrivateRoute>
    </Switch>
    </>
  );
});

export default RouterTabs;