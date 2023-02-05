import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'
import NavBar from './Navbar'

function App() {

  return (
    <div className="App">
        <div>      
          <NavBar title="Home" />
        </div>
      <h1>Anime Ranking</h1>
      <div className="anime-card">
        <p>
          My anime ranking based on what I've watched for a month. 
        </p>
      </div>
    </div>
  )
}

export default App;
