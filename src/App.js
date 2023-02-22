import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import About from './About'
import Contact from './Contact'
import Home from './Home'
import './App.css'
import Error from './Error'
import Project from './Project'
import Footer from './Footer'

 const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="*" element={<Error/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="about" element={<About/>} />
      <Route path="contact" element={<Contact/>}/>
      <Route path="project" element={<Project/>}/>
    </Routes>
    </BrowserRouter>
    <Footer/>
    </>
  )
}
export default App