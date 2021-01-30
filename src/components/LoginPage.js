import React, {useState} from 'react';
import {useHistory, useLocation} from "react-router-dom";
import {TextField, Button} from '@material-ui/core';
import {useAuth} from './App'

const LoginPage = () => {
  let history = useHistory();
  let location = useLocation();
  let auth = useAuth();
  const [username, setUserName] = useState('');
  const handleUserNameChange = event => {
    setUserName(event.target.value);
  };
  const [password, setPassword] = useState('');
  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    auth.signin(username, password, () => {
      history.replace(from);
    });
  };

  return (
    <div>
    <p>You must log in to view the page at {from.pathname}</p>
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
    </div>
  );
}

export default LoginPage;