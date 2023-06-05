import React from 'react'

import {FaPencilAlt} from 'react-icons/fa'
import {FaFlag} from 'react-icons/fa'
import {FaLaptop} from 'react-icons/fa'
import {FaBriefcase} from 'react-icons/fa'
import {FaCode} from 'react-icons/fa'
import {HiOutlineSupport} from 'react-icons/hi'

const services=[
  {
    icon:<FaPencilAlt/>,
    name:'CREATIVE DESIGN',
    content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusm.',
  },
  {
    icon:<FaFlag/>,
    name:'BRANDING',
    content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusm.',
  },
  {
    icon:<FaLaptop/>,
    name:'USER INTERFACE',
    content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusm.',
  },
  {
    icon:<FaBriefcase/>,
    name:'USER EXPERIENCE',
    content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusm.',
  },
  {
    icon:<FaCode/>,
    name:'CLEAN CODE',
    content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusm.',
  },
  {
    icon:<HiOutlineSupport/>,
    name:'FAST SUPPORT',
    content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusm.',
  },
]

export default function Services() {
  return (
    <section className='section services' id='services'>
      <div className="container">
        <div className="section-title">
          my services
        </div>
        <div className="section-main services-main grid">
          {
            services.map((item,index)=>{
              return(
                <div className="card" key={index}>
                  <div className="card__icon">
                    {item.icon}
                  </div>
                  <div className="card__name">
                    {item.name}
                  </div>
                  <div className="card__content">
                    {item.content}
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}
