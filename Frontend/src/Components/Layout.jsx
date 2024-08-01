import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from './Common/NavBar/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from './Common/Footer/Footer'
function Layout() {
  return (
    <div>
      <NavBar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout
