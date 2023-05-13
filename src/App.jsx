import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-3xl text-center rounded-lg bg-blue-300 text-white">Welcome to sky hopper</h1> 
    </>
  )
}

export default App
