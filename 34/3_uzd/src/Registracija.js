import React, { useState } from "react";

function Registracija() {
    const [vardas, setVardas] = useState('')

    const hangleSubmit = (e) => {
        e.preventDefault()
        alert(`Ivestas vardas ${vardas}`)
    }

    return (
        <div>
            <h2>Registracija</h2>
            <form onSubmit={hangleSubmit}>
                <label>
                    Vardas:
                    <input
                      type="text"
                      value={vardas}
                      onChange={(e) => setVardas(e.target.value)}
                    />
                </label>
                <button type="submit">Pateikti</button>
            </form>
        </div>
    )
}

export default Registracija