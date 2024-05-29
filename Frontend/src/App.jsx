import React from "react";
import './App.css'
import { Routes,Route } from "react-router-dom";
import {Addbook} from './pages/Addbook.jsx'
import {Showbook} from './pages/Showbook.jsx';
import { Home} from './pages/Home';
import { Editbook } from "./pages/Editbook.jsx";
import {Deletebook} from "./pages/Deletebook.jsx"

const App = () => {
  return ( 
   <Routes>
  { console.log("hello baby") }
    <Route path="/" element={<Home />}></Route>
    <Route path='/books/create' element={ <Addbook /> } />
    <Route path='/books/details/:id' element={<Showbook /> } />
    <Route path='/books/edit/:id' element={<Editbook />} />
    <Route path="/books/delete/:id" element={<Deletebook />} />
   </Routes>
  )
}
export default App;