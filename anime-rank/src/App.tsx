import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'
import NavBar from './Navbar'
import Body from './Body'
import React from 'react';

function App() {

  return (
    <div className="App">
        <Body/> 
      <h1 className="header">Anime Ranking</h1>
      <div className="anime-card">
        <p>
          My anime ranking based on what I've watched for a month. 
        </p>
      </div>
    </div>
  )
}

export default App;
