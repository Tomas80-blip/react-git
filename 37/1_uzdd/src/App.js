import ThemeDisplay from "./components/ThemeDisplay"
import UserProfile from "./components/UserProfile"
import LoginButton from "./components/LoginButton"
import { ThemeProvider } from "./context/ThemeContext"
import { UserProvider } from "./context/UserContext"
import { AuthProvider } from "./context/AuthContext"
import React from "react"

const App = () => {
    return (
        <ThemeProvider>
            <AuthProvider>
                {(user) => (
                    <UserProvider user={user}>
                        <div>
                            <h1>React Context Demonstracija</h1>
                            <ThemeDisplay />
                            <UserProfile />
                            <LoginButton />
                        </div>
                    </UserProvider>
                )}
            </AuthProvider>
        </ThemeProvider>
    )
}

export default App


// import React, { createContext, useContext, useState } from "react";

// // ThemeContext
// const ThemeContext = createContext();
// const ThemeDisplay = () => {
//   const { theme, toggleTheme } = useContext(ThemeContext);
//   return (
//     <div>
//       <p>Esama tema: {theme}</p>
//       <button onClick={toggleTheme}>Keisti temą</button>
//     </div>
//   );
// };

// // UserContext
// const UserContext = createContext();
// const UserProfile = () => {
//   const { user } = useContext(UserContext);
//   return <p>{user ? `Prisijungęs vartotojas: ${user.name}` : "Vartotojas neprisijungęs"}</p>;
// };

// // AuthContext
// const AuthContext = createContext();
// const LoginButton = () => {
//   const { isLoggedIn, toggleAuth } = useContext(AuthContext);
//   return <button onClick={toggleAuth}>{isLoggedIn ? "Atsijungti" : "Prisijungti"}</button>;
// };

// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const toggleAuth = () => setIsLoggedIn((prev) => !prev);

//   const [theme, setTheme] = useState("light");
//   const toggleTheme = () => setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));

//   const user = isLoggedIn ? { name: "Jonas" } : null;

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       <UserContext.Provider value={{ user }}>
//         <AuthContext.Provider value={{ isLoggedIn, toggleAuth }}>
//           <div>
//             <h1>React Context Demonstracija</h1>
//             <ThemeDisplay />
//             <UserProfile />
//             <LoginButton />
//           </div>
//         </AuthContext.Provider>
//       </UserContext.Provider>
//     </ThemeContext.Provider>
//   );
// };

// export default App;
