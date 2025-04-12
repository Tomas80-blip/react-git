import React from 'react';
import { useAuth } from './AuthContext';
import LoginButton from './LoginButton';

const App = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div>
      <h1>Welcome to the App</h1>
      <LoginButton />
    </div>
  );
};

export default App;
