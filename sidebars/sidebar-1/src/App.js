import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import {Sidebar} from "./components/Sidebar/Sidebar.js"
import "./app.css"

export const App = () => {
  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route path='/generator' element={<h1 style={{"marginLeft":"54px"}}>JSON Generator</h1>}></Route>
        <Route path='/settings' element={<h1 style={{"marginLeft":"54px"}}>Settings</h1>}></Route>
        <Route path='/favorite' element={<h1 style={{"marginLeft":"54px"}}>Favorite</h1>}></Route>
        <Route path='/ratings' element={<h1 style={{"marginLeft":"54px"}}>Ratings</h1>}></Route>
      </Routes>
    </BrowserRouter>
  )
}
