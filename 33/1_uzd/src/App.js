// Task 1
// 1. JSX Sintaksės Naudojimas 
// Užduotis: 
// 1. App.js faile sukurkite JSX elementą, kuris atvaizduoja vardą ir amžių. 
// 2. Pridėkite paveikslėlį (<img>), mygtuką (<button>) ir nuorodą (<a>). 
// 3. JSX viduje įterpkite JavaScript kintamąjį, kuris saugo dabartinius metus, ir išveskite 
// juos į ekraną. 
// Rezultatas: 
// Komponentas, kuris teisingai atvaizduoja tekstą, paveikslėlį ir JavaScript kintamuosius JSX 
// viduje. 
// 2. Funkciniai Komponentai 
// Užduotis: 
// 1. Sukurkite naują komponentą Profilis.js, kuris atvaizduos vartotojo vardą ir 
// pomėgį. 
// 2. Komponentas turi priimti vardas ir pomegis kaip props. 
// 3. Naudokite šį komponentą App.js faile ir perduokite skirtingus duomenis. 
// Rezultatas: 
// Profilis komponentas, kuris gali priimti ir atvaizduoti skirtingus vartotojo duomenis

import React from "react";
import Profilis from "./Profilis";
import Pasisveikinimas from "./Pasisveikinimas";

function App() {
  const vardas = 'Ona';
  const pavarde = 'Onaite';
  const amzius = 25;
  let dabartiniaiMetai = new Date().getFullYear();
  
  return (
    <div>
      <h1>Sveiki atvyke i React!</h1>
      <img 
        src='https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        alt='Keliautojos nuotrauka'
        width='300'
      />
      <Pasisveikinimas vardai={vardas} pavardes={pavarde}/>

      <p>Vardas: {vardas}, Amzius: {amzius}</p>
      <p>Dabartiniai metai: {dabartiniaiMetai}</p>

      <button onClick={() => alert('Paspaudei mygruka!')}>Spausti cia</button>
      <br/>
      <a href="https://react.dev/" target="_blank" rel="noreferrer">
        React
      </a>

      <h3>Vartotoju profiliai</h3>
      <Profilis vardai='Jonas' pomegiai='Krepsinis'/>
      <Profilis vardai='Elge' pomegiai='Fotografija'/>
    </div>
  );
}

export default App;
