import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'
import './Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
      </div>
      <h1>Anime Ranking</h1>
      <div className="card">
        <p>
          My ranking each month with regards to Anime. 
        </p>
      </div>
    </div>
  )
}

export default App
