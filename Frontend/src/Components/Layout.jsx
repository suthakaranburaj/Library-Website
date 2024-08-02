import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from './Common/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from './Common/Footer'
function Layout() {
  return (
    <div>
      <NavBar/>
      <h1>Hello</h1>
      <Outlet/>
      {/* <Footer/> */}
    </div>
  )
}

export default Layout
