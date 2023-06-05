import React from 'react'

import {AiFillGithub} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
import {AiFillEye} from 'react-icons/ai'


import data from '../asset/dataProject-Ideas'

export default function Project() {
  return (
    <section className='project section' id='project'>
        <div className="container">
            <div className="section-title">
                My projects
            </div>
            <div className="grid project-main">
                {
                    data&&
                    data.map((item, index)=>{
                        return(
                            <div className="project-item" key={index}>
                                <div className="project-item__header flex">
                                    <a href={item.youtube}><AiFillYoutube className='icon'/></a>
                                    <a href={item.github}><AiFillGithub className='icon'/></a>
                                </div>
                                <div className="project-item__img">
                                    <img src={item.img} alt="" />
                                </div>
                                <div className="project-item__title">
                                    {item.title}
                                </div>
                                <div className="project-item__content">
                                    {item.content}
                                </div>
                                <div className="project-item__info flex">
                                    <span>{item.date}</span>
                                    <span>{item.langs}</span>
                                </div>
                                <div className="project-item__action">
                                    <a href={item.link_demo} className='btn'>
                                        <span><AiFillEye className='icon'/></span>
                                        <span>View demo</span>
                                    </a>
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
