// 1. Paprastas konteksto sukūrimas ir naudojimas 
// Užduotis: 
// 1. Sukurkite ThemeContext.js failą, kuriame apibrėžkite React kontekstą su 
// numatytąja verte "light". 
// 2. Sukurkite App.jsx, kuriame ThemeContext.Provider perduotų temą "dark". 
// 3. Sukurkite komponentą ThemeDisplay.jsx, kuris naudoja 
// useContext(ThemeContext) ir atvaizduoja esamą temą. 
// Rezultatas: 
// Naršyklėje turi būti matoma tekstinė išraiška „Esama tema: dark“.

// import React,{ createContext, useContext }  from "react";

// const ThemeContext = createContext("light");

// const ThemeDisplay = () => {
//   const theme = useContext(ThemeContext);
//   return <p>Esama tema: {theme}</p>;
// };


// const App = () => {
//   return (
//     <ThemeContext.Provider value="dark">
//       <ThemeDisplay />
//     </ThemeContext.Provider>
//   );
// };

// export default App;

// 2. Naudotojo vardo rodymas naudojant useContext 
// Užduotis: 
// 1. Sukurkite UserContext.js, kuris laikys vartotojo informaciją (vardas: "Jonas"). 
// 2. App.jsx viduje sukurkite UserProvider, kuris perduoda UserContext.Provider 
// reikšmę. 
// 3. Sukurkite UserProfile.jsx, kuris naudoja useContext(UserContext) ir 
// atvaizduoja naudotojo vardą. 
// Rezultatas: 
// Naršyklėje matomas tekstas „Prisijungęs vartotojas: Jonas“. 

// import React from 'react';
// import { UserProvider } from './UserContext';
// import UserProfile from './UserProfile';

// const App = () => {
//   return (
//     <UserProvider>
//       <div>
//         <h1>App Component</h1>
//         <UserProfile />
//       </div>
//     </UserProvider>
//   );
// };

// export default App;


// 3. Autentifikacijos valdymas su useContext 
// Užduotis: 
// 1. Sukurkite AuthContext.js, kuris laikytų isLoggedIn būseną (true arba false). 
// 2. App.jsx turi rodyti prisijungimo arba atsijungimo mygtuką pagal isLoggedIn 
// reikšmę. 
// 3. Sukurkite LoginButton.jsx, kuris leidžia keisti autentifikacijos būseną. 
// Rezultatas: 
// • Jei vartotojas prisijungęs, rodomas mygtukas „Atsijungti“. 
// • Jei neprisijungęs, rodomas mygtukas „Prisijungti“. 
// • Paspaudus mygtuką, būklė pasikeičia. 



import React from 'react';
import ReactDOM from 'react-dom';
import { AuthProvider } from './AuthContext';
import App from './App';

ReactDOM.render(
  <AuthProvider>
    <App />
  </AuthProvider>,
  document.getElementById('root')
);