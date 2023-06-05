import React from 'react'

import Header from './Header'
import Navbar from './Navbar'
import Slidebar from './Slidebar'
import Portfolio from './Portfolio'
import Project from './Project'
import Home from './Home'
import About from './About'
import Services from './Services'
import Resume from './Resume'
import Blog from './Blog'
import Contact from './Contact'

export default function Layout() {
  return (
    <>
        <Header/>
        <Navbar/>
        <Slidebar/>
        <Home/>
        <About/>
        <Services/>
        <Resume/>
        <Portfolio/>
        <Project/>
        <Blog/>
        <Contact/>
    </>
  )
}
