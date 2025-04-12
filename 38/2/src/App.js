// Pamoka 38 CSS Moduliai ir Styled Components React'e

// CSS Moduliai ir Styled Components React'e

// CSS Moduliai
// Kas yra CSS moduliai?
// CSS moduliai yra būdas stilizuoti React komponentus taip, kad stiliai būtų izoliuoti
//  ir netrukdytų kitiems komponentams. Tai leidžia išvengti konfliktų tarp CSS klasių
//  ir užtikrina geresnę struktūrą didesniuose projektuose.

// Kaip naudoti CSS modulius?
// Sukurkite .module.css failą, pavyzdžiui: MyComponent.module.css.
// Importuokite jį į React komponentą ir priskirkite klases.
// Naudokite stilius kaip objekto savybes.
// Pavyzdys:

// MyComponent.module.css

// Pavyzdys:

// Sukurti MyComponent.module.css

// .container {
//   background-color: lightblue;
//   padding: 20px;
//   border-radius: 5px;
// }

// // Sukurti MyComponent.jsx

// import React from "react"
// import styles from './MyComponent.module.css';

// function MyComponent() {
//   return (
//     <div className={styles.container}>
//       <h2>CSS Moduliai React'e</h2>
//     </div>
//   );
// }

// export default MyComponent;


// import React from 'react';
// // import './App.css';
// import MyComponent from './MyComponent'; // Import your component

// function App() {
//   return (
//     <div className="App">
//       <MyComponent />
//     </div>
//   );
// }

// export default App;


// CSS modulių privalumai
// Lokalūs stiliai – kiekvienas komponentas turi savo stilius.
// Automatinis pavadinimų sugeneravimas – React sugeneruoja unikalius klasių pavadinimus.
// Lengva palaikyti – nereikia jaudintis dėl CSS konfliktų.


// CSS modulių privalumai
// Lokalūs stiliai – kiekvienas komponentas turi savo stilius.
// Automatinis pavadinimų sugeneravimas – React sugeneruoja unikalius klasių pavadinimus.
// Lengva palaikyti – nereikia jaudintis dėl CSS konfliktų.




// Styled Components

// Kas yra Styled Components?

// Styled Components yra CSS-in-JS biblioteka, leidžianti rašyti CSS tiesiogiai JavaScript faile ir naudoti juos kaip komponentus.
// Kaip naudoti Styled Components?
// Įdiekite styled-components biblioteką:

// npm install styled-components

// Importuokite styled iš bibliotekos.
// Sukurkite ir naudokite stilizuotus komponentus.
// Pavyzdys:(neveikia)

// import React from "react"
// import styled from 'styled-components';

// const Container = styled.div`
//   background-color: lightblue;
//   padding: 20px;
//   border-radius: 5px;
// `;

// function MyComponent() {
//   return (
//     <Container>
//       <h2>Styled Components React'e</h2>
//     </Container>
//   );
// }

// export default MyComponent;

// Styled Components privalumai
// Dinaminių stilių palaikymas – galima perduoti props ir keisti stilius.
// Nereikia atskirų CSS failų – visi stiliai aprašomi komponentuose.
// Lengvas temų valdymas – galima sukurti globalias temas ir naudoti ThemeProvider.


// Papildomi būdai naudoti CSS React'e
// Paprastas CSS naudojimas React'e
// Be CSS modulių ir Styled Components, galima naudoti tradicinius CSS failus:

// Sukurkite App.css failą:
// .container {
//   background-color: lightblue;
//   padding: 20px;
//   border-radius: 5px;
// }



// Importuokite jį į App.jsx:

import React from "react"
import './App.css';

function App() {
  return (
    <div className="container">
      <h2>Paprastas CSS React'e</h2>
    </div>
  );
}

export default App;






// Example 2

// import React from "react"
// import AnimatedBox from "./components/AnimatedBox"

// function App() { 
//     return (
//         <div style={{ display: "flex", justifyContent: "center", padding: "50px"}}>
//             <AnimatedBox />
//         </div>
//     )
// }

// export default App

