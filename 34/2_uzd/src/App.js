// Task 2
// 1. Pagrindinis useState naudojimas
// Užduotis:
// 1. Sukurkite App.js faile komponentą Sveikinimas.
// 2. Komponentas turėtų turėti mygtuką „Keisti tekstą“.
// 3. Paspaudus mygtuką, tekstas turėtų pasikeisti iš „Sveiki!“ į „Labas, React!“.
// Rezultatas:
// Komponentas, kuris naudoja useState norint atnaujinti tekstą mygtuko paspaudimu.

// 2. Skaitiklis su mygtukais
// Užduotis:
// 1. Sukurkite Skaitiklis.js komponentą.
// 2. Komponentas turi turėti skaičiaus būseną (useState(0)).
// 3. Pridėkite du mygtukus:
// a. „+1“ – padidina skaičių.
// b. „-1“ – sumažina skaičių.
// Rezultatas:
// Interaktyvus skaitiklis, kuris neleidžia skaičiui būti mažesniam nei 0.

import Skaitiklis from "./Skaitiklis";
import Sveikinimas from "./Sveikinimas";
function App() {
  return (
    <div>
      <Sveikinimas />
      <Skaitiklis />
    </div>
  );
}

export default App;
