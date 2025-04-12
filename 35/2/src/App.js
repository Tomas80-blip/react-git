import React, { useEffect, useState } from "react";

function Vartotojai() {
  const [vartotojai, setVartotojai] = useState([])
  const [vardas, setVardas] = useState('')
  const [amzius, setamzius] = useState('')
npm
  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/vartotojai')
    .then((response) => response.json())
    .then((data) => setVartotojai(data))
    .catch((error) => console.error('Klaida gaunant duomenis: ', error))
  }, [])
  
  const pridetiVartotoja = () => {
    const naujasVartotojas = { vardas, amzius: Number(amzius) };

    fetch("http://127.0.0.1:5000/api/vartotojai", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(naujasVartotojas),
    })
      .then((res) => res.json())
      .then((data) => setVartotojai((prev) => [...prev, data]))
      .catch((error) => console.error("Klaida siunciant duomenis: ", error));
  };
  
  return (
    <div>
      <h2>Vartotoju sarasas</h2>
      <ul>
        {vartotojai.map((v) => (
          <li key={v.id}>
            {v.vardas}, {v.amzius} metų
          </li>
        ))}
      </ul>
      <h3>Prideti nauja vartotoja</h3>
      <input type="text" placeholder="Vardas" value={vardas} onChange={(e) => setVardas(e.target.value)}/>
      <input type="number" placeholder="Amzius" value={amzius} onChange={(e) => setamzius(e.target.value)}/>
      <button onClick={pridetiVartotoja}>Prideti</button>
    </div>
  )
}


function App() {
  return <Vartotojai />
}

export default App





// // Example 1

// import React, { useEffect, useState } from "react";

// function Zmones() {
//   const [zmones, setZmones] = useState([])

//   useEffect(() => {
//     fetch('http://127.0.0.1:5000/api/zmones')
//     .then((response) => response.json())
//     .then((data) => setZmones(data))
//     .catch((error) => console.error('Kaila gaunant duomenis: ', error))
//   }, [])

//   return (
//     <div>
//       <h2>Zmoniu sarasas</h2>
//       <ul>
//         {zmones.map((zmogus) => 
//           <li key={zmogus.id}>
//             <strong>{zmogus.vardas}</strong>, {zmogus.amzius} metu
//           </li>
//         )}
//       </ul>
//     </div>
//   )
// }

// function App() {
//   return <Zmones />
// }

// export default App
