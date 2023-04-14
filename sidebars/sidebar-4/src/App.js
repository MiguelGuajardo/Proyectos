import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import { Navbar } from './components/Navbar'
import { Home } from './pages/Home/Home'
import { Reports } from './pages/Reports/Reports'
import { Products } from './pages/Products/Products'
import { Team } from './pages/Team/Team'
import { Messages } from './pages/Messages/Messages'
import { Support } from './pages/Support/Support'
export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/reports' element={<Reports />} />
        <Route path='/products' element={<Products />} />
        <Route path='/team' element={<Team />} />
        <Route path='/messages' element={<Messages />} />
        <Route path='/support' element={<Support />} />
      </Routes>

    </BrowserRouter>
  )
}
