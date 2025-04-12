// React: useState kablys ir būsenos valdymas
// 1. Kas yra useState ir kaip jis naudojamas?
// useState yra vienas iš pagrindinių React kablių (hooks), leidžiantis komponentams valdyti vidinę būseną.
// Jis dažniausiai naudojamas funkciniuose komponentuose vietoje this.state, kuris buvo naudojamas klasiniuose komponentuose.

// useState pagrindinė sintaksė:
// import React, { useState } from "react";

// function Pavyzdys() {
//   const [reiksme, setReiksme] = useState("Pradinė reikšmė");
//   //  useState kaip pradine reiksme, o setReiksme kaip pakeista reiksme
  
//   return (
//     <div>
//       <p>{reiksme}</p>
//       <button onClick={() => setReiksme("Nauja reikšmė")}>Keisti</button>
//     </div>
//   );
// }


// Paaiškinimas:

// useState("Pradinė reikšmė") nustato pradinę reikšmę.
// setReiksme("Nauja reikšmė") atnaujina būseną.
// Paspaudus mygtuką, nauja reikšmė atsiranda ekrane.

// 2. Mygtuko paspaudimu keičiama būsena
// Būsenos valdymas gali būti naudojamas ne tik tekstui keisti, bet ir skaičiavimams atlikti.

// Skaitiklio su mygtuku pavyzdys:

import Skaiciuokle from "./Skaiciuokle";


function App() {
  return <Skaiciuokle/>
}

export default App;
// Paaiškinimas:

// useState(0) nustato pradinę reikšmę 0.
// Mygtukai didina ir mažina reikšmę, iškviesdami setSkaicius su nauja reikšme.

