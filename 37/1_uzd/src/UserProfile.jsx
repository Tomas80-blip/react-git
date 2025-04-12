import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const UserProfile = () => {
  const user = useContext(UserContext); // Gauname naudotojo informaciją iš konteksto

  return (
    <div>
      <p>Prisijungęs vartotojas: {user.name}</p>
    </div>
  );
};

export default UserProfile;