import React, { useState } from 'react'
import './App.css'
import { NavLink } from 'react-router-dom'
import {FaTimes,FaBars} from 'react-icons/fa'
import{AiFillHome} from 'react-icons/ai'
import {FcAbout} from 'react-icons/fc'
import {AiFillContacts} from 'react-icons/ai'
import {GiFilmProjector} from 'react-icons/gi'
const Header= () => {
  const [click,setclick]=useState(false);
    const handleclick=()=> setclick(!click);
  return (
    <>
    <nav>
    <div className='logo'>
    <NavLink to="/"> Portfolio..</NavLink>
      </div>
      <div className={click ?"first active":
      "first"}>
        <ul>
            <li>
                <NavLink to="/">Home <AiFillHome className='home'/></NavLink>
            </li>
            <li>
                <NavLink to="/about">About<FcAbout className='about'/></NavLink>
            </li>
            <li>
                <NavLink to="/project">Projects<GiFilmProjector className='project'/></NavLink>
            </li>
            <li>
                <NavLink to="/contact">Contact<AiFillContacts className='contact'/></NavLink>
            </li>
        </ul>
        </div>
        <div className='menu' onClick={handleclick}>
        {click ? (<FaTimes className='icon1'/>)
        : (<FaBars className='icon2'/>)
        }
        </div>
        </nav>
    </>
  )
}
export default Header
