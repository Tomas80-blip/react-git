import React from "react"
import {LanguageProvider} from "./context/LanguageContext"
import Greeting from "./components/Greeting"
import LanguageSelector from "./components/LanguageSelector"

function App() {
  return (
    <LanguageProvider>
      <div style={{textAlign: "center", padding: "20px"}}>
        <Greeting/>
        <LanguageSelector/>
      </div>
    </LanguageProvider>
  )
}

export default App