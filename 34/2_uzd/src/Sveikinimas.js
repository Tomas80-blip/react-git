import React, { useState } from "react";

function Sveikinimas() {
  const [tekstas, setTekstas] = useState("Sveiki!");

  const keistiTeksta = () => {
    setTekstas("Labas, React!");
  };

  return (
    <div>
      <h1>{tekstas}</h1>
      <button onClick={keistiTeksta}>Keisti tekstą</button>
    </div>
  );
}

export default Sveikinimas;