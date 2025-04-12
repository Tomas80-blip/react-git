import React from 'react';
import { UserProvider } from './UserContext';
import UserProfile from './UserProfile';

const App = () => {
  return (
    <UserProvider>
      <div>
        <h1>App Component</h1>
        <UserProfile />
      </div>
    </UserProvider>
  );
};

export default App;