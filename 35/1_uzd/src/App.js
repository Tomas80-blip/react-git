// 1. Pagrindinis useEffect naudojimas 
// Užduotis: 
// 1. Sukurkite komponentą Zinute.js. 
// 2. Naudokite useEffect, kad išvestų pranešimą „Komponentas užsikrovė!“ į 
// naršyklės konsolę. 
// 3. Komponentas turėtų atvaizduoti paprastą tekstą, pvz., „Tai yra pranešimas iš 
// useEffect“. 
// Rezultatas: 
// Komponentas, kuris atspausdina tekstą naršyklėje ir pranešimą konsolėje po įkėlimo. 
// 2. useEffect su priklausomybėmis 
// Užduotis: 
// 1. Sukurkite komponentą Skaiciuokle.js. 
// 2. Komponentas turi skaitiklį (useState), kuris didėja paspaudus mygtuką. 
// 3. Kai skaitiklis pasikeičia, useEffect turėtų išvesti į konsolę: „Skaičius pasikeitė į: 
// [nauja reikšmė]“. 
// Rezultatas: 
// Komponentas su skaitikliu, kurio reikšmė keičiasi, o kiekvienas pasikeitimas 
// atvaizduojamas konsolėje.


// Skaiciuokle.js

import React from "react"
import Zinute from "./Zinute";
import Skaiciuokle from "./Skaiciuokle";
function App() {
  return (
    <div>
      <Zinute /> 
      <Skaiciuokle /> 
    </div>
  );
}

export default App;
