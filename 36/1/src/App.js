// React Router pagrindai
// Kas yra React Router?
// React Router yra bibliotekos React aplikacijoms, leidžiančios kurti ir valdyti maršrutus.

// Pagrindiniai konceptai:
// BrowserRouter – pagrindinis komponentas, kuris įgalina maršrutų valdymą naudojant HTML5 istoriją.
// Routes – komponentas, kuriame aprašomi visi maršrutai.
// Route – komponentas, apibrėžiantis konkretų maršrutą.
// Link ir NavLink – naudojami navigacijai tarp puslapių.

// Tam kad veiktu react-router-dom reikia i kiekviena sukurta react darbine direktorija 
//  suinstaliuoti react-router-dom:
//  npm install react-router-dom


// Example 1

// import { BrowserRouter, Routes, Route } from 'react-router-dom'

// function Home() {
//   return <h2>Pagrindinis puslapis</h2>
// }

// function About() {
//   return <h2>Apie mus</h2>
// }

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path='/' element={<Home />}></Route>
//         <Route path='/about' element={<About />}></Route>
//       </Routes>
//     </BrowserRouter>
//   )}

// export default App

// Navigacija tarp puslapių
// Link ir NavLink
// Navigacijai naudojami Link ir NavLink komponentai vietoje <a> tagų, kad puslapis neperkrautųsi.

// // Example 2
// import { BrowserRouter, Routes,  Route, Link, NavLink } from 'react-router-dom'

// function Navbar() {
//   return (
//     // Link kai reikia paprastos navigacijos
//     <nav>
//       <Link to='/' style={{ margin: "0px 20px" }}>Pagrindinis</Link>
//       <Link to='/about'>Apie mus</Link>
//       <br/>

//      {/* NavLink leidžia keisti stilių aktyviam puslapiui,(kai reikia  stiliaus): */}

//       <NavLink to='/' className={({isActive}) => (isActive ? 'active-link': '')}>
//         Pagrindinis
//       </NavLink>

//       <NavLink to='/about' className={({isActive}) => (isActive ? 'active-link': '')}>
//         Apie mus
//       </NavLink>
//     </nav>
//   )
// }

// function Home() {
//   return <h2>Home</h2>
// }

// function About() {
//   return <h2>About</h2>
// }

// function App() {
//   return (
//     <BrowserRouter>
//       <Navbar />

//       <Routes>
//         <Route path='/' element={<Home />}></Route>
//         <Route path='/about' element={<About />}></Route>
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App


// Example 3
// import { BrowserRouter, Routes, Route, useParams, Link } from 'react-router-dom'

// function UserProfile() {
//   let { id } = useParams()

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
//         <Route path='/user/:id' element={<UserProfile />} />
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App



// // Example 4
// import { BrowserRouter, Routes, Route, useParams, Link } from 'react-router-dom'

// function OrderDetails() {
//   let { userId, orderId } = useParams()

//   return <h2>Vartotojo ID: {userId}, Uzsakymo ID: {orderId}</h2>
// }

// function Home() {
//   return <h2>Home</h2>
// }

// function NotFound() {
//   return (
//     <div>
//       <h2>404 - Puslapis nerastas</h2>
//       <Link to='/'>Grizti i pagrindini puslapi</Link>
//     </div>
//   )
// }

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path='/' element={<Home />}/>
//         <Route path='/user/:userId/order/:orderId' element={<OrderDetails />}/>
      
//         <Route path='*' element={<NotFound />} />
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App