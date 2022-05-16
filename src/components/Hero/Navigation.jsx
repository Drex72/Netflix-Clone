import React, { useState } from 'react'
import logo from '../../Images/logo.png'

const Navigation = ({ handleClick }) => {
  return (
    <div className="nav">
      <img className="logo" src={logo} alt="" />
      <button onClick={handleClick} className="signin">
        Sign In
      </button>
    </div>
  )
}

export default Navigation
