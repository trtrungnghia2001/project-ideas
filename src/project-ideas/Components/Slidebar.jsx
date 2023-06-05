import React from 'react'
import {useAppContext} from '../context'

import {FaHome} from 'react-icons/fa'
import {FaUserAlt} from 'react-icons/fa'
import {FaTasks} from 'react-icons/fa'
import {FaGraduationCap} from 'react-icons/fa'
import {FaBriefcase} from 'react-icons/fa'
import {FaNewspaper} from 'react-icons/fa'
import {FaMapMarkerAlt} from 'react-icons/fa'
import {CgWebsite} from 'react-icons/cg'

const slidebar=[
    {
        icon: <FaHome/>,
        name:'home',
        path:'home',
    },
    {
        icon: <FaUserAlt/>,
        name:'about',
        path:'about',
    },
    {
        icon: <FaTasks/>,
        name:'services',
        path:'services',
    },
    {
        icon: <FaGraduationCap/>,
        name:'resume',
        path:'resume',
    },
    {
        icon: <FaBriefcase/>,
        name:'portfolio',
        path:'portfolio',
    },
    {
      icon: <CgWebsite/>,
      name:'project',
      path:'project',
    },
    {
        icon: <FaNewspaper/>,
        name:'blog',
        path:'blog',
    },
    {
        icon: <FaMapMarkerAlt/>,
        name:'contact',
        path:'contact',
    },
]

export default function Slidebar() {

  const {toggle, setToggle} = useAppContext()

  return (
    <div className={toggle? "slidebar hide" : "slidebar"} onClick={()=>setToggle(true)}>
      <div className="slidebar-body">
        <div className="slidebar-logo">
          <a href="">
            <span>F</span>
            olio
            <span>.</span>
          </a>
        </div>
        <div className="slidebar-main">
          <ul className='slidebar-listLink'>
            {
              slidebar.map((item, index)=>{
                return(
                  <li key={index} className='slidebar-item'>
                    <a href={`#${item.path}`} onClick={()=>setToggle(true)}>
                      {item.icon}
                      {item.name}
                    </a>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </div>
  )
}
