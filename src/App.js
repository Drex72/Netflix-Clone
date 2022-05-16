import { useState } from 'react'
import SignUp from '../src/components/Sign-Up/SignUp.jsx'
import Sign from './components/Sign-Up/Sign'

import LandingPage from './pages/Landing-Page/Landing-page'

function App() {
  const [user, setUser] = useState(localStorage.getItem('user') || false)

  return (
    <div className="App">
      <LandingPage setUser={setUser} />
    </div>
  )
}

export default App
