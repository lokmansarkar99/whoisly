import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import About from "../pages/About";


import React from 'react'

const Layout = () => {
  return (
    <div>
        <Navbar />
        <Outlet />  
        <Footer />


    </div>
  )
}

export default Layout