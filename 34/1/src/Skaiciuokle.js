import React, { useState } from 'react'

function Skaiciuokle() {
  const [skaicius, setSkaicius] = useState(0);
  // useState kaip pradine reiksme, o setReiksme kaip pakeista reiksme
  
  return (
    <div>
      <h1>{skaicius}</h1>
      <button onClick={() => setSkaicius(skaicius + 1)}>Padidinti</button>
      <button onClick={() => setSkaicius(skaicius - 1)}>Sumažinti</button>
    </div>
  );
}

export default Skaiciuokle