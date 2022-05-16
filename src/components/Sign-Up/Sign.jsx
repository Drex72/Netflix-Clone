import React, { useState } from 'react'
import SignUp from './SignUp'
import Login from '../login/Login'
const Sign = ({ setUser }) => {
  const [toggle, setToggle] = useState(false)
  let authTitle = ''
  function conditionals() {
    if (toggle) {
      authTitle = 'Sign Up'
    } else {
      authTitle = 'Login'
    }
  }
  conditionals()

  return (
    <div className="form body">
      <div className="background">
        <div className="text2">
          <h1>Welcome to {`${authTitle}`} form</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste eum quas quaerat minima
            tempora incidunt!
          </p>
        </div>
      </div>
      <div className="authentication">
        <div className="container2">
          <h1>{authTitle}</h1>
          {toggle ? (
            <SignUp toggle={toggle} setUser={setUser} setToggle={setToggle} />
          ) : (
            <Login toggle={toggle} setUser={setUser} setToggle={setToggle} />
          )}
        </div>
      </div>
    </div>
  )
}

export default Sign
