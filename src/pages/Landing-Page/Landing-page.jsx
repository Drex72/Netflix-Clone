import React, { useState } from 'react'
import Hero from '../../components/Hero/Hero'
import Sign from '../../components/Sign-Up/Sign.jsx'
import Content from '../../components/Content/Content'
import SignUp from '../../components/Sign-Up/SignUp'
const LandingPage = ({setUser}) => {
  const [change, setChange] = useState()
  const onTermClick = (toggle, setToggle) => {
    setChange(toggle)
  }
  return (
    <>
      <Hero onTermClick={onTermClick} setUser ={setUser} />
      {console.log(change)}
       <Content /> 
    </>
  )
}

export default LandingPage
