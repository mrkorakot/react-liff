import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import AllTask from './AllTask'
import Profile from './Profile'

function App() {

  const [stage, setStage] = useState('Profile')

  return (
    <div className="App">
      <div className="nav">
        <div onClick={() => { setStage('AllTask') }}>All Task</div>
        <div onClick={() => { setStage('Profile') }}>Profile</div>
      </div>
      <div className="container">
        { stage === 'AllTask' && <AllTask /> }
        { stage === 'Profile' && <Profile /> }
      </div>
    </div>
  )
}

export default App
