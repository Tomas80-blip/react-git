// 3. Formos valdymas su useState 
// Užduotis: 
// 1. Sukurkite Registracija.js komponentą. 
// 2. Komponentas turėtų turėti įvesties laukelį ir mygtuką „Pateikti“. 
// 3. Kai vartotojas įveda vardą, jis išsaugomas būsenoje (useState). 
// 4. Paspaudus mygtuką, turėtų atsirasti alert, kuris rodo įvestą vardą. 
// Rezultatas: 
// Interaktyvi forma, kuri leidžia vartotojui įvesti vardą ir jį pateikti.

import React, { useState } from "react";
import Registracija from "./Registracija";

function App() {
  return (
    <div>
      <h1>Sveiki atvyke i React!!!</h1>
      <Registracija />
    </div>
  )
}

export default App;