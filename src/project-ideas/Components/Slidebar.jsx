import React, { useState } from 'react'
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
        action: true,
    },
    {
        icon: <FaUserAlt/>,
        name:'about',
        path:'about',
        action: false,
    },
    {
        icon: <FaTasks/>,
        name:'services',
        path:'services',
        action: false,
    },
    {
        icon: <FaGraduationCap/>,
        name:'resume',
        path:'resume',
        action: false,
    },
    {
        icon: <FaBriefcase/>,
        name:'portfolio',
        path:'portfolio',
        action: false,
    },
    {
      icon: <CgWebsite/>,
      name:'project',
      path:'project',
      action: false,
    },
    {
        icon: <FaNewspaper/>,
        name:'blog',
        path:'blog',
        action: false,
    },
    {
        icon: <FaMapMarkerAlt/>,
        name:'contact',
        path:'contact',
        action: false,
    },
]

export default function Slidebar() {

  const {toggle, setToggle} = useAppContext()
  const [actionLink, setActionLink] = useState(slidebar)

  const handbleClick = (value)=>{
    const newList = actionLink.map(item=>{
      item.name===value? item.action=true : item.action=false
      return item
    })
    setActionLink(newList)
  }

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
                  <li key={index} 
                  className={item.action? 'slidebar-item slidebar-item-action' : 'slidebar-item'}
                  onClick={()=>handbleClick(item.name)}
                  
                  >
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
