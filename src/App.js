import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import AllTask from './AllTask'
import Profile from './Profile'

function App() {

  const [stage, setState] = useState('Profile')

  return (
    <div className="App">
      <div className="nav">
        <div onClick={() => { setState('AllTask') }}>All Task</div>
        <div onClick={() => { setState('Profile') }}>Profile</div>
      </div>
      <div className="container">
        { stage === 'AllTask' && <AllTask /> }
        { stage === 'Profile' && <Profile /> }
      </div>
    </div>
  )
}

export default App
