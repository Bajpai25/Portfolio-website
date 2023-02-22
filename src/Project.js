import React from 'react'
import Header from './Header'
import {FaFileAlt} from 'react-icons/fa'
import {SiNetflix} from 'react-icons/si'
import {TiWeatherPartlySunny} from 'react-icons/ti'
import {MdRestaurantMenu} from 'react-icons/md'
import {SiGooglesheets} from 'react-icons/si'
import {SiTodoist} from "react-icons/si"
import {MdShoppingCart} from "react-icons/md"
import {GiTakeMyMoney} from 'react-icons/gi'
import "./project.css"
 const Project = () => {
  return (
    <><Header/>
    <div className='project1'>
    <p className='projecttitle'>Projects</p>
</div>
<div className="pehla"> 
<div className="bigcard">
<p className='upar'>Netflix Prototype <SiNetflix/></p>
<div className="card">
  <img src="./assets/netflix.png" alt='src'></img>
  <div className="info">
    <h2>Netflix and Chill</h2>
    <p>This is a Netflix Prototype..
    </p>
    <button className='visit'><a href="https://clone1-netflix.web.app">Visit</a></button>
  </div>
  </div>
  </div>
  <div className="bigcard">
  <p className='upar'>Weather App <TiWeatherPartlySunny/></p>
  <div className="card">
  <img src="./assets/weather.png" alt='src'></img>
  <div className="info">
    <h2>Weather App</h2>
    <p>This App uses Realtime API to give Forecast..
    </p>
    <button className='visit'><a href="https://weather-app-c4f5f.web.app">Visit</a></button>
  </div>
  </div>
  </div>
  <div className="bigcard">
  <p className='upar'>Resume builder <FaFileAlt/></p>
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
  </div>
  <div className="pehla"> 
<div className="bigcard">
<p className='upar'>Restaurant Site <MdRestaurantMenu/></p>
<div className="card">
  <img src="./assets/hotel.png" alt='src'></img>
  <div className="info">
    <h2>Restaurant Site... </h2>
    <p>This is a Restaurant Site displaying menu,items and its prices...
    </p>
    <button className='visit'><a href="https://restaurant-site-c3367.web.app">Visit</a></button>
  </div>
  </div>
  </div>
  <div className="bigcard">
  <p className='upar'>Keep Clone <SiGooglesheets/></p>
  <div className="card">
  <img src="./assets/google.png" alt='src'></img>
  <div className="info">
    <h2>Google Keep Clone...</h2>
    <p>This App is a modified prototype of Google Keep. 
    </p>
    <button className='visit'><a href="https://clone2--keep.web.app">Visit</a></button>
  </div>
  </div>
  </div>
  <div className="bigcard">
  <p className='upar'>TO-DO List <SiTodoist/></p>
  <div className="card">
  <img src="./assets/list.png" alt='src'></img>
  <div className="info">
    <h2>TO-DO List...</h2>
    <p>You wanna memorise it ; then write it down in our TO-DO list App. 
    </p>
    <button className='visit'><a href="https://rescape-sasuke.web.app/">Visit</a></button>
  </div>
  </div>
  </div>
  </div>
  <div className="pehla">
    <div className='bigcard'>
      <p className='upar'>E-commerce Site <MdShoppingCart/></p>
      <div className="card">
      <img src="./assets/Rescape.png" alt='src'></img>
  <div className="info">
    <h2>E-commerce Site..</h2>
    <p>This is an E-commerce shopping website.  
    </p>
    <button className='visit'><a href="https://rescape-sasuke.web.app/">Visit</a></button>
  </div>
  </div>
      </div>
      <div className="bigcard">
  <p className='upar'> Expense Tracker <GiTakeMyMoney/></p>
  <div className="card">
  <img src="./assets/tracker.png" alt='src'></img>
  <div className="info">
    <h2>Expense Tracker</h2>
    <p>TRACK Your CashFlow..
    </p>
    <button className='visit'><a href="https://expense-tracker-d8f74.web.app">Visit</a></button>
  </div>
  </div>
  </div>
    </div>
    </>
  )
}

export default Project
