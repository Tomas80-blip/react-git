import React from 'react';
import { useAuth } from './AuthContext';

const LoginButton = () => {
  const { isLoggedIn, login, logout } = useAuth();

  return (
    <button onClick={isLoggedIn ? logout : login}>
      {isLoggedIn ? 'Atsijungti' : 'Prisijungti'}
    </button>
  );
};

export default LoginButton;

