import React from "react";
import ThemeContext from "./ThemeContext";
import ThemeDisplay from "./ThemeDisplay";

const App = () => {
  return (
    <ThemeContext.Provider value="dark">
      <ThemeDisplay />
    </ThemeContext.Provider>
  );
};

export default App;