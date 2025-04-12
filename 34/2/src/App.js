// 3. Formų valdymas su useState
// Kai dirbame su formomis, dažnai reikia valdyti įvedamus duomenis realiu laiku.

// Forma su useState:
import React, { useState } from "react";

function Registracija() {
  const [vardas, setVardas] = useState("");

  // Kai vartotojas paspaudžia mygtuką "Pateikti", įvyksta formos pateikimas.
  const handleSubmit = (e) => {
    e.preventDefault();
    //(neleidžia puslapiui persikrauti)
    alert(`Įvestas vardas: ${vardas}`);
  };

  return (
    // Forma turi onSubmit={handleSubmit}, tad paspaudus mygtuką, iškviečiama handleSubmit funkcija.
    <form onSubmit={handleSubmit}>
      <label>Vardas:
        <input type="text" value={vardas}
          onChange={(e) => setVardas(e.target.value)}
          // Kai vartotojas rašo į input, šis įvykis atnaujina vardas
          //  būseną su nauja įvesta reikšme (e.target.value).
        />
      </label>
      <button type="submit">Pateikti</button>
    </form>
  );
}

function App() {
  return <Registracija/>
}

export default App;
// Paaiškinimas:

// useState("") saugo įvestą tekstą.
// onChange={(e) => setVardas(e.target.value)} atnaujina būseną kiekvieną kartą, kai vartotojas įveda tekstą.
// Paspaudus „Pateikti“, rodomas alert su įvestu vardu.


// 5. Išvados
// useState leidžia valdyti komponentų būseną funkciniuose komponentuose.
// Būseną galima keisti paspaudus mygtukus.
// Formų įvedimo laukus galima valdyti naudojant useState.
// Praktinis pavyzdys su skaitikliu parodo, kaip naudoti useState dinamiškai keičiant reikšmę.
