import React, { createContext, useState, useContext } from 'react';

// Sukuriame kontekstą su numatytąja būsena
const AuthContext = createContext();

// Sukuriame AuthProvider komponentą, kuris užtikrina, kad būsena bus pasiekiama kitose komponentuose
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Sukuriame custom hook, kad būtų lengviau pasiekti AuthContext
export const useAuth = () => useContext(AuthContext);
