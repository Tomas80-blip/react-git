import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

const ThemeDisplay = () => {
  const theme = useContext(ThemeContext);
  return <p>Esama tema: {theme}</p>;
};

export default ThemeDisplay;