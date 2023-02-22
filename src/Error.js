import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Error.css"

const Error = () => {
  return (
  <>
  <div className="error">
  <NavLink to="/"> 
  <button className='crush'>
  HOME
  </button>
  </NavLink>

</div>
  </>
  )
  
}
export default Error
