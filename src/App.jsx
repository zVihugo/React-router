import './App.css'

//Importando o react router

import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

//importando pages

import Home from './pages/Home'
import HomeAlternative from './pages/HomeAlternative'
import Product from './pages/Product'
import Info from './pages/Info'
import NotFound from './pages/NotFound'

//Importando o componente NavBar

import NavBar from './components/NavBar'
import SearchForm from './components/SearchForm'
import Search from './pages/Search'

function App() {


  return (
    <>
      <h1>React Router</h1>
      <BrowserRouter>
        <NavBar />
        <SearchForm />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<HomeAlternative />} />
          <Route path="/Products/:id/info" element={<Info />} />
          <Route path="/Products/:id" element={<Product />} />
          <Route path="/search" element={<Search />} />
          <Route path="/company" element={<Navigate to="/Home"/>} />
          {/* no match route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
