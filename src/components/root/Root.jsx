import React from 'react'
import NavBar from '../navbar/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'

const Root = () => {
  return (
    <div className='max-w-6xl mx-auto'>
        <NavBar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Root