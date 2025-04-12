import React, { createContext } from 'react';

// Sukuriame kontekstą su numatytąja reikšme
const UserContext = createContext();

// Sukuriame UserProvider komponentą, kuris perduos kontekstą
const UserProvider = ({ children }) => {
  const user = { name: "Jonas" }; // Naudotojo vardas
  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };