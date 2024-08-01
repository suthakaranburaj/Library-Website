import { useState } from 'react'
import './App.css'
import NavBar from './Components/Common/NavBar/NavBar'
import HomePage from './Components/Pages/HomePage/HomePage'
import Footer from './Components/Common/Footer/Footer'


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
