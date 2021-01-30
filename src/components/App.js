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
import LoginPage from './LoginPage';
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
        console.log('data', data);
        setUser(username);
        cb();
      });
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
    signin,
    signout
  };
}

const AuthButton = () => {
  let history = useHistory();
  let auth = useAuth();

  return auth.user ? (
    <p>
      Welcome!{" "}
      <button
        onClick={() => {
          auth.signout(() => history.push("/"));
        }}
      >
        Sign out
      </button>
    </p>
  ) : (
    <p>You are not logged in.</p>
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

            <ul>
              <li>
                <Link to="/protected">Protected Page</Link>
              </li>
            </ul>

            <Switch>
              <Route path="/login">
                <LoginPage />
              </Route>
              <PrivateRoute path="/protected">
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
