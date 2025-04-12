// useContext – kas tai ir kam jis reikalingas?
// Kas yra useContext?
// useContext yra React hook'as, leidžiantis pasiekti ir naudoti globaliai bendrinamą būseną bet kuriame komponente
//  be papildomo props drilling (perdavimo per props).

// Kam jis reikalingas?
// Palengvina duomenų perdavimą per gilią komponentų hierarchiją.
// Leidžia valdyti bendrinamą būseną be papildomo sudėtingumo.
// Dažnai naudojamas kartu su React.createContext().

// Kaip veikia useContext?
// Sukuriame kontekstą:

// import { createContext } from "react";

// const ThemeContext = createContext("light"); // numatytoji reikšmė
// Suteikiame konteksto reikšmę:

// import { ThemeContext } from "./ThemeContext";

// function App() {
//   return (
//     <ThemeContext.Provider value="dark">
//       <ChildComponent />
//     </ThemeContext.Provider>
//   );
// }
// Panaudojame useContext vaiko komponente:

// import { useContext } from "react";
// import { ThemeContext } from "./ThemeContext";

// function ChildComponent() {
//   const theme = useContext(ThemeContext);
//   return <p>Esama tema: {theme}</p>;
// }
// Kada naudoti useContext?
// Kai reikia bendrinti duomenis tarp kelių komponentų (pvz., tema, kalba, autentifikacijos būsena).
// Kai props drilling tampa per sudėtingas.
// Kai nereikia sudėtingos būsenos valdymo, kaip su Redux.

// Pavyzdys su useContext
import { createContext, useState, useContext } from "react";

const CountContext = createContext();

function CountProvider({ children }) {
  const [count, setCount] = useState(0);
  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
}

function Counter() {
  const { count, setCount } = useContext(CountContext);
  return (
    <div>
      <p>Skaičius: {count}</p>
      <button onClick={() => setCount(count + 1)}>Didinti</button>
    </div>
  );
}

function App() {
  return (
    <CountProvider>
      <Counter />
    </CountProvider>
  );
}

export default App



// // Example 1
// import React, { createContext, useContext, useState } from 'react'

// const ThemeContext = createContext('light')

// function ThemeProvider({ children }) {
//   const [theme, setTheme] = useState('light')

//   return (
//     <ThemeContext.Provider value={{ theme, setTheme }}>
//       { children }
//     </ThemeContext.Provider>
//   )
// }

// function ThemeComponent() {
//   const { theme, setTheme } = useContext(ThemeContext)

//   return (
//     <div style={{ background: theme === 'dark' ? "#333" : "#fff", color: theme === "dark" ? "#fff" : "#000", padding: "10px" }}>
//       <p>Dabartine tema: {theme}</p>
//       <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
//         Keisti tema
//       </button>
//     </div>
//   )
// }

// function App() {
//   return (
//     <ThemeProvider>
//       <ThemeComponent/>
//     </ThemeProvider>
//   )
// }

// export default App



// // Example 2
// import React, { createContext, useContext, useState } from "react"

// const AuthContext = createContext(null)

// function AuthProvider({ children }) {
//   const [user, setUser] = useState(null)

//   function login() {
//     setUser({name: 'Darius', role: 'admin'})
//   }

//   function logout() {
//     setUser(null)
//   }

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       { children }
//     </AuthContext.Provider>
//   )
// }

// function UserProfile() {
//   const { user, login, logout } = useContext(AuthContext)

//   return (
//     <div>
//       {user ? (
//         <>
//           <p>Prisijunges kaip {user.name} ({user.role})</p>
//           <button onClick={logout}>Atsijungtii</button>
//         </>
//       ) : (
//         <button onClick={login}>Prisijungti</button>
//       )}
//     </div>
//   )
// }

// function App() {
//   return (
//     <AuthProvider>
//       <UserProfile />
//     </AuthProvider>
//   )
// }

// export default App

