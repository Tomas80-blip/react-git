// Task 1

// 1. Pagrindinių maršrutų sukūrimas 
// Užduotis: 
// 1. Sukurkite Home.jsx ir About.jsx komponentus. 
// 2. Sukurkite App.jsx, kuriame būtų naudojamas React Router. 
// 3. Apibrėžkite du maršrutus:  
// a. / → pagrindinis puslapis (Home) 
// b. /about → informacinis puslapis (About) 
// 4. Pridėkite Navbar.jsx komponentą su navigacijos nuorodomis (Link). 
// Rezultatas: 
// Naviguojant tarp puslapių neturi būti įvykdomas puslapio perkrovimas.


// import { BrowserRouter, Routes, Route, Link, NavLink} from 'react-router-dom'

// function Home() {
//   return <h2>Pagrindinis puslapis</h2>
// }

// function About() {
//   return <h2>Apie mus</h2>
// }

// function Navbar() {
//   return (
//     <nav>
//       <Link to='/' style={{ margin: "0px 20px" }}>Home</Link>
//       <Link to='/about'>About</Link>
//       <br/>  

//       <NavLink to='/' className={({isActive}) => (isActive ? 'active-link': '')}>
//         Home
//       </NavLink>

//       <NavLink to='/about' className={({isActive}) => (isActive ? 'active-link': '')}>
//         About
//       </NavLink>
//     </nav>
//   )
// }


// function App() {
//   return (
//     <BrowserRouter>
//      <Navbar />
//       <Routes>
//         <Route path='/' element={<Home />}></Route>
//         <Route path='/about' element={<About />}></Route>
//       </Routes>
//     </BrowserRouter>
//   )}
// 
// export default App





// 2. Dinaminiai URL parametrai 
// Užduotis: 
// 1. Sukurkite UserProfile.jsx komponentą. 
// 2. Apibrėžkite maršrutą /user/:id, kuris priimtų dinaminį vartotojo ID. 
// 3. Naudokite useParams() kablį tam, kad ekrane būtų rodomas atitinkamas ID. 
// Rezultatas: 
// Atidarius http://localhost:3000/user/7, ekrane turėtų būti matomas tekstas 
// „Vartotojo ID: 7“.

// import { BrowserRouter, Routes, Route, useParams, Link } from 'react-router-dom'

// function UserProfile() {
//   let { id } = useParams()
// // kai URL atitinka /user/:id, React atvaizduoja UserProfile komponentą.
//   return <h2>Vartotojo ID: { id }</h2>
// }

// function Home() {
//   return (
//     <div>
//       <h2>Pagrindinis puslapis</h2>
//       <Link to='/user/1'>Vartotojas 1</Link>
//       <br/>
//       <Link to='/user/2'>Vartotojas 2</Link>
//     </div>
//   )
// }

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path='/' element={<Home />}/>
//         {/* reiškia, kad ši maršruto dalis yra dinaminė (:id)
//         Kai vartotojas nueina į /user/1, id tampa 1. */}
//         <Route path='/user/:id' element={<UserProfile />} />
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App


// 3. Aktyvios nuorodos su NavLink 
// Užduotis: 
// 1. Sukurkite navigacijos meniu su NavLink. 
// 2. Pridėkite aktyvaus puslapio klasę (className={({ isActive }) => 
// isActive ? "active" : ""}). 
// 3. Aktyvus puslapis turi būti pažymėtas CSS stiliumi (pvz., spalva pasikeičia į mėlyną). 
// Rezultatas: 
// Navigacijos nuoroda bus vizualiai pažymėta, kai vartotojas bus atitinkamame puslapyje. 




// 4. 404 puslapio kūrimas 
// Užduotis: 
// 1. Sukurkite NotFound.jsx komponentą. 
// 2. Apibrėžkite maršrutą *, kuris sugauna visus neegzistuojančius puslapius. 
// 3. Rodomas pranešimas „Puslapis nerastas“. 
// Rezultatas: 
// Įvedus neegzistuojantį adresą, pvz., http://localhost:3000/xyz, vartotojas pamatys 
// klaidos pranešimą. 


// dest

import { BrowserRouter as Router, Routes, Route, NavLink, useParams } from 'react-router-dom'

const Home = () => <h1>Pagrindinis puslapis</h1>;

const About = () => <h1>Apie mus</h1>

const NonFound = () => <h1>Puslapis nerastas</h1>

const UserProfile = () => {
  const { id } = useParams()
  return <h1>Vartotojo ID: { id }</h1>
}

const Navbar = () => {
  return (
    <nav>
      <NavLink to='/' className={({ isActive }) => isActive ? 'active' : ''}>Pagrindinis</NavLink>
      <NavLink to='/about' className={({ isActive }) => isActive ? 'active' : ''}>Apie mus</NavLink>
      <NavLink to='/user/7' className={({ isActive }) => isActive ? 'active' : ''}>Vartotojas 7</NavLink>
    </nav>
  )
}

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/user/:id' element={<UserProfile />} />
        <Route path='*' element={<NonFound />} />
      </Routes>
    </Router>
  )
}

export default App
