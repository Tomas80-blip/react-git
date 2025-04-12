import { useState, useEffect } from "react";

function Skaiciuokle () {
  const [skaicius, setSkaicius] = useState(0);

  useEffect(() => {
    console.log(`Skaičius pasikeitė į: ${skaicius}`);
  }, [skaicius]);

  return (
    <div>
      <p>Skaičius: {skaicius}</p>
      <button onClick={() => setSkaicius(skaicius + 1)}>Didinti</button>
    </div>
  );
};

export default Skaiciuokle;