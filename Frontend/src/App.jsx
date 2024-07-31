import { useState } from 'react'
import './App.css'
import NavBar from './Components/Common/NavBar'
import HomePage from './Components/Pages/HomePage'
import Footer from './Components/Common/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* hello */}

      <NavBar/>
      <HomePage/>
      <Footer/>
    </>
  )
}

export default App
