import './Poster.css'
import React from 'react'
import { NavLink } from 'react-router-dom'
 const Poster = () => {
  return (
  <>
     <div className='poster'>
    <div className='content'>
    <h3>Hello I'M A FREELANCER</h3>
    <h1>REACT DEVELOPER</h1>
    <NavLink to="/project"><button className='x'>
  <span></span>
  <span></span>
  <span></span>
  <span></span> PROJECTS
</button></NavLink>
<NavLink to='/contact'><button class="shadow__btn">
    CONTACT
</button></NavLink>
</div>
</div>
<div className="wrapper">
<button className="view">
  <div class="default-btn">
    <svg class="css-i6dzq1" stroke-linejoin="round" stroke-linecap="round" fill="none" stroke-width="2" stroke="#FFF" height="20" width="20" viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle r="3" cy="12" cx="12"></circle></svg>
    <span>Quick View</span>
  </div>
  <div class="hover-btn">
    <svg class="css-i6dzq1" stroke-linejoin="round" stroke-linecap="round" fill="none" stroke-width="2" stroke="#ffd300" height="20" width="20" viewBox="0 0 24 24"><circle r="1" cy="21" cx="9"></circle><circle r="1" cy="21" cx="20"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
    <span>Projects</span>
  </div>
</button>
  <div className="card">
  <img src="./assets/weather.png" alt='src'></img>
  <div className="info">
    <h2>Weather App</h2>
    <p>This App uses Realtime API to give Forecast..
    </p>
    <button className='visit'><a href="https://weather-app-c4f5f.web.app ">Visit</a></button>
    </div>
  </div>
  <div className="card">
  <img src="./assets/netflix.png" alt='src'></img>
  <div className="info">
    <h2>Netflix and Chill</h2>
    <p>This is a Netflix Prototype..
    </p>
    <button className='visit'><a href="https://clone1-netflix.web.app">Visit</a></button>
  </div>
  </div>
  <div className="card">
  <img src="./assets/Rescape.png" alt='src'></img>
  <div className="info">
    <h2>Rescape..</h2>
    <p>This is a Resume Generator. Community Project!! 
    </p>
    <button className='visit'><a href="https://rescape-sasuke.web.app/">Visit</a></button>
  </div>
  </div>
  </div>
  </>
  )
  }
export default Poster;
