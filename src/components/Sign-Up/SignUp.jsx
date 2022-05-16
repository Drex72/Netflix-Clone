import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '../../firebase'
import { doc, serverTimestamp, setDoc } from 'firebase/firestore'
import { async } from '@firebase/util'
import { Navigate, useNavigate } from 'react-router-dom'

const SignUp = ({ setUser, toggle, setToggle }) => {
  // const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')

  const signUpUser = async (e) => {
    e.preventDefault()
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password)
      await setDoc(doc(db, 'users', response.user.uid), {
        displayName: displayName,
        email: email,
        password: password,
        timestap: serverTimestamp(),
      })
      setUser(localStorage.setItem('user', response.user.uid))
      //   navigate('/todo', { state: { displayName } })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="">
      <div>
        <form action="" onSubmit={signUpUser}>
          <div className="login">
            <div className="labels">
              <label htmlFor="">Full Name</label>
              <label htmlFor="">Email</label>
              <label htmlFor="">Password</label>
            </div>
            <div className="inputs">
              <input
                type="text"
                value={displayName}
                onChange={(e) => {
                  setDisplayName(e.target.value)
                }}
              />
              <input type="email" onChange={(e) => setEmail(e.target.value)} />
              <input
                type="password"
                value={password}
                name=""
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
                id=""
              />
            </div>
          </div>
          <div className="remember">
            <div>
              <input type="checkbox" name="" id="" />
              <p>Send me notifications and Emails</p>
            </div>
            <button onSubmit={signUpUser}>Sign up</button>
          </div>
        </form>
        <p className="noaccount">
          Already a member
          <button className="toggle-btn" onClick={() => setToggle(!toggle)}>
            Log in
          </button>
        </p>
      </div>
    </div>
  )
}

export default SignUp
