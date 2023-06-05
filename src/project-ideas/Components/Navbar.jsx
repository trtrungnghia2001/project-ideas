import React from 'react'
import { useAppContext } from '../context'
import {HiBars3BottomRight} from 'react-icons/hi2'

export default function Navbar() {

  const {setToggle} = useAppContext()

  return (
    <nav className='navbar'>
      <div className="container flex nav-main">
        <div className="nav-logo">
          <a href="">
            <span>F</span>
            olio
            <span>.</span>
          </a>
        </div>
        <div className="nav-toggle" onClick={()=>setToggle(false)}>
          <HiBars3BottomRight/>
        </div>
      </div>
    </nav>
  )
}
