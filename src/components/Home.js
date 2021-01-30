import React from 'react';
import {useAuth} from './App'

const Home = () => {
  const {user: {username}} = useAuth();

  return (
    <div>
      <p>Hi, {username}!</p>
      <p>This is a todo list helper, you can add/delete/toggle a todo.</p>
    </div>
  );
}

export default Home;