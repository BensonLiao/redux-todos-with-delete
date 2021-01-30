import React , { useContext, createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory
} from "react-router-dom";
import axios from 'axios';
import {Container} from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Login from './Login';
import Home from './Home';
import Profile from './Profile';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import TodoListFilter from './TodoListFilter';
const API_KEY = process.env.REACT_APP_API_KEY;

const fakeAuth = {
  isAuthenticated: false,
  signin(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

const authContext = createContext();

const ProvideAuth = ({ children }) => {
  const auth = useProvideAuth();
  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(authContext);
}

const useProvideAuth = () => {
  const [user, setUser] = useState(null);

  const signin = (username, password, cb) => {
    return fakeAuth.signin(() => {
      axios.get(
        'https://watch-master-staging.herokuapp.com/api/login',
        {
          headers: {
            'X-Parse-Application-Id': API_KEY,
            'X-Parse-REST-API-Key': ''
          },
          params: {
            username,
            password
          }
        }
      )
      .then(({data}) => {
        // Do not store any sensitive data for security.
        delete data.password
        setUser(data);
        cb();
      });
      // setUser({username: 'elon musk', code: 'spacex', timezone: 1});
      // cb();
    });
  };

  const updateUser = (objectId, sessionToken, timezone) => {
    return axios.put(
      `https://watch-master-staging.herokuapp.com/api/users/${objectId}`,
      {
        timezone: +timezone
      },
      {
        headers: {
          'X-Parse-Application-Id': API_KEY,
          'X-Parse-REST-API-Key': '',
          'X-Parse-Session-Token': sessionToken
        }
      }
    )
    .then(() => {
      // Normally we call get api again to retrieve the latest data,
      // however the get api require password and its unsafe to store user password in app,
      // so here's a simple workaround to update data.
      const updatedUser = user;
      updatedUser.timezone = timezone;
      setUser(updatedUser);
    });
  };

  const signout = cb => {
    return fakeAuth.signout(() => {
      setUser(null);
      cb();
    });
  };

  return {
    user,
    updateUser,
    signin,
    signout
  };
}

const AuthButton = () => {
  let history = useHistory();
  let auth = useAuth();

  return (
    <div>
      {auth.user ? (
        <button
          onClick={() => {
            auth.signout(() => history.push("/"));
          }}
        >
          Sign out
        </button>
      ) : (
        <p>You are not logged in.</p>
      )}
    </div>
  );
}

const PrivateRoute = ({ children, ...rest }) => {
  let auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

const App = () => {
  const theme = createMuiTheme();
  return (
    <Container maxWidth='sm'>
      <ThemeProvider theme={theme}>
        <ProvideAuth>
        <Router>
          <div>
            <AuthButton />
            <Route path="/login">
              <Login />
            </Route>

            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/todolist">Todo List</Link>
              </li>
            </ul>

            <Switch>
              <PrivateRoute path="/home">
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
          </div>
        </Router>
      </ProvideAuth>
      </ThemeProvider>
    </Container>
  )
}

export default App
