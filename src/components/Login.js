import React, {useState} from 'react';
import {useHistory, useLocation} from "react-router-dom";
import {TextField, Button} from '@material-ui/core';
import {useAuth} from './App'

const Login = () => {
  const history = useHistory();
  const location = useLocation();
  const auth = useAuth();
  const [username, setUserName] = useState('');
  const handleUserNameChange = event => {
    setUserName(event.target.value);
  };
  const [password, setPassword] = useState('');
  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  const { from } = location.state || { from: { pathname: "/" } };
  const login = () => {
    auth.signin(username, password, () => {
      history.replace(from);
    });
  };

  return (
    <div>
      {auth.user ? null : (
        <form>
          <div>
            <TextField id="user-name" label="Name" value={username} onChange={handleUserNameChange} />
          </div>
          <div>
            <TextField id="password" label="Password" type="password" value={password} onChange={handlePasswordChange} />
          </div>
          <div>
            <Button 
              variant="outlined"
              color="primary"
              onClick={login}
            >
              Log in
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}

export default Login;