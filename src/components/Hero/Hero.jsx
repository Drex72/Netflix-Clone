import React, { useState } from 'react'
import Navigation from './Navigation'
import '../../pages/Landing-Page/Landing-Page.css'
import './Hero.css'
import Sign from '../Sign-Up/Sign'
import background from '../../Images/background.jpg'

const Hero = ({ onTermClick, setUser }) => {
  const [toggle, setToggle] = useState(false)
  const myStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  }

  const handleClick = () => {
    setToggle(!toggle)
    onTermClick(toggle, setToggle)
  }

  return (
    <div className="intro" style={myStyle}>
      {toggle ? <Sign setToggle={setToggle} setUser={setUser} /> : ''}
      <div className="container">
        <Navigation handleClick={handleClick} />
        <div className="hero">
          <div className="text">
            <h1>Unlimited movies, TV shows, and more</h1>
            <p className="paragraph">watch anywhere. Cancel anytime</p>
          </div>
          <p className="paragraph2">Ready to watch? Click the button below to start</p>
          <button onClick={handleClick}>Get started </button>
        </div>
      </div>
    </div>
  )
}

export default Hero
