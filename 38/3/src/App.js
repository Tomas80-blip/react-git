import React from "react"
import Button from './components/Button'

function App() {
    return (
        <div style={{ display: "flex", justifyContent: "center", gap: "10px", padding: "20px" }}>
            <Button primary>Primary</Button>
            <Button >Default</Button>
        </div>
    )
}

export default App