import React from 'react'
import Header from './Header'
import {ImProfile} from 'react-icons/im'
import './About.css'
import { NavLink } from 'react-router-dom'
const  About = () => {
  return (
    <>
    <div className='about-main'>
    <Header/>
    <h1 className='about-title'>ABOUT</h1>
    <img src='./assets/quote.png' className='quote' alt='quote'></img>
    </div>
    <h1 className='profile'>BIO<ImProfile className='im'/></h1>
    <div className='about2'>
      <img src='./assets/my.jpg' alt='my' className='my'>
      </img>
      <img src='./assets/into.png' alt='intro' className='intro' ></img>
      <div/>
      <div className='text-file'>
      <p className='bio'>"I am keen interested in building new websites 
      and working on new projects.</p><span className='line2'>I love learning new skills day by day and 
      enhancing knowledge.."</span>       
     <p className='skills'>Skills/Speciality ::</p>
     <p className='li'>Freelancer And React Developer</p>
      <p className='li'>HTML:5</p>
      <p className='li'>Advanced CSS</p>
      <p className='li'>Javascript</p>
      <p className='li'>UI && Graphic designing</p>
      <p className='li'>FIGMA && CANVA</p>
      <p className='li'>API Handelling</p>
      <p className='li'>Node.JS</p>
 <p className='li'><button><NavLink to="/project">
 Check out projects </NavLink></button>
  </p>
    </div>
    </div> 
      </>
  )
}
export default About
