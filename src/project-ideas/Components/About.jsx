import React from 'react'
import img from '../asset/img/about.jpg'

const about =[
    {
        name: 'name',
        value: 'Tran Trung Nghia',
    },
    {
        name: 'age',
        value: new Date().getFullYear() - 2001,
    },
    {
        name: 'phone',
        value: '+1 212 410-1845',
    },
    {
        name: 'address',
        value: 'New York, USA',
    },
    {
        name: 'website',
        value: 'exmaple.com',
    },
    {
        name: 'email',
        value: 'Support@Example.Com',
    },
]

export default function About() {
  return (
    <section className='about section' id='about'>
        <div className="container about-main flex">
            <div className="about-left">
                <div className="about-img">
                    <img src={img} alt="" />
                </div>
            </div>
            <div className="about-right">
                <div className="section-title">
                ABOUT ME
                </div>
                <div className="name">
                I am Tran Trung Nghia
                </div>
                <div className="caption">
                I am a Full-Stack Web Developer
                </div>
                <div className="content">
                    <p>I am a freelancer based in New York, USA, and I'm very passionate and dedicated to my work. With 7 years experience as a professional Full-Stack Web Developer, I have acquired the skills necessary to build great and premium websites.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
                </div>
                <div className="table-cell">
                    {
                        about.map((item, index)=>{
                            return(
                                <div className="item" key={index}>
                                    <span>{item.name}: </span>
                                    {item.value}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </section>
  )
}
