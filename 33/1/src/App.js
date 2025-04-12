// React įvadas: Komponentai ir JSX sintaksė
// 1. Kaip įsidiegti React?
// React galima įdiegti keliais būdais, tačiau populiariausias yra naudojant: create-react-app.

// React įdiegimas su create-react-app
// Įsitikinkite, kad turite įdiegtą Node.js (node -v komanda terminale).
// Atidarykite terminalą ir vykdykite komandą:

// npx create-react-app mano-projektas

// Pereikite į projekto aplanką:

// cd mano-projektas

// kad sugrizti per viena direktorija atgal:
// cd..

// Paleiskite aplikaciją:

// npm start

// Naršyklėje atsidarys http://localhost:3000, kur bus matomas naujai sukurtas React projektas.

// 2. Kas yra React ir kaip jis veikia?
// React yra JavaScript biblioteka, kuri leidžia kurti vartotojo sąsajas naudojant komponentinę architektūrą.

// React pagrindiniai principai:
// Deklaratyvumas – vietoje tiesioginio DOM manipuliavimo naudojamas virtualus DOM.
// Komponentinė architektūra – aplikacija suskirstoma į mažesnius komponentus.
// Vienpusis duomenų srautas – tėviniai komponentai perduoda duomenis vaikiniams per props.
// React veikia naudojant virtualų DOM, kuris atnaujina tik pasikeitusias vartotojo sąsajos dalis, taip optimizuodamas našumą.

// 3. JSX sintaksė ir jos ypatumai
// JSX (JavaScript XML) leidžia rašyti HTML sintaksę tiesiogiai JavaScript kode.

// JSX pagrindai:

// const element = <h1>Sveiki atvykę į React!</h1>;

// JSX kodas yra paverčiamas į React.createElement funkciją:

// const element = React.createElement('h1', null, 'Sveiki atvykę į React!');

// JSX ypatybės:
// Visi elementai turi būti uždaryti:
// <img src="logo.png" alt="Logo" />

// JS kodą galima naudoti JSX viduje:
// const vardas = "Jonas";
// const element = <h1>Sveiki, {vardas}!</h1>;

// Klasės atributas pavadinamas className:
// <div className="container">Turinys</div>

// import React from "react";

// function App() {
//   const vardas = "Ona";
//   // gali buti tik vienas tevinis elementas o kiti div jame kaip childai
//   return (
//     <div>
//       <div>
//         <div>
//           <h1> Sveiki atvyke i React!!!</h1>
//           <h2> Sveiki, {vardas}!!!</h2>
//           <p> LABAS </p>
//         </div>
//         <div>
//           <p>Hello, World</p>
//         </div>
//       </div>
//       <p>Ate</p>
//     </div>
//   );
// }
// export default App;

// 4. Komponentai ir jų kūrimas
// React aplikacijos yra sudarytos iš komponentų. Komponentai gali būti funkciniai arba klasės.

// Funkciniai komponentai
// Funkciniai komponentai yra paprastesni ir dažniausiai naudojami su props.
// props. - tai properties

// function Pasisveikinimas(props) {
//   return <h1>Sveiki, {props.vardas}!</h1>;
// }
// Naudojimas:

// <Pasisveikinimas vardas="Jonas"

// props  gaunami kaip objektas



// import React from "react";
// import Pasisveikinimas from "./Pasisveikinimas";

// function App() {
//   const vardas = "Ona";
//   let pavarde = "Onaite";
//   return (
//     <div>
//       <h1> Sveiki atvyke i React!!!</h1>
//       <Pasisveikinimas vardai={vardas} pavardes={pavarde} />
//       <h2> Sveiki, {vardas}!!!</h2>
//       <p> LABAS </p>
//     </div>
//   );
// }
// export default App;



import React from "react";
import Vartotojai from "./Vartotojai";

function App() {
  const duomenys = [
    {id: 1, vardas: 'Jonas', amzius: 25},
    {id: 2, vardas: 'Laura', amzius: 30},
    {id: 3, vardas: 'Darius', amzius: 20},
    {id: 4, vardas: 'Ona', amzius: 40},
    {id: 5, vardas: 'Petras', amzius: 50},
  ];

  return (
    <div>
      <Vartotojai vartotojai={duomenys}/>
    </div>
  );
}

export default App;
