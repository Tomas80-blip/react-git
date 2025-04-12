import React from "react"
import Card from "./components/Card"

function App() {
    return (
        <div style={{ display: "flex", gap: "20px", padding: "20px"}}>
            <Card title='Card 1' description='Description 1' />
            <Card title='Card 2' description='Description 2'/>
            <Card title='Card 3' description='Description 3'/>
        </div>
    )
}

export default App
