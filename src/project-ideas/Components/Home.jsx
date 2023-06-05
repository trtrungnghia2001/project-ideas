import React, { useCallback, useEffect, useState } from 'react'

import {FaFacebookF} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaBehance} from 'react-icons/fa'
import {FaLinkedinIn} from 'react-icons/fa'

const home = [
  {
    icon: <FaFacebookF/>,
    path: '',
  },
  {
    icon: <FaTwitter/>,
    path: '',
  },
  {
    icon: <FaInstagram/>,
    path: '',
  },
  {
    icon: <FaBehance/>,
    path: '',
  },
  {
    icon: <FaLinkedinIn/>,
    path: '',
  },
]

export default function Home() {
  const [caption, setCaption] = useState('')

  const runText = useCallback(()=>{
    let text = ['Designer.','Freelancer.', 'Photographer.']
    let index = 0
    let i = 0
    let check = true;
    let speed = 200
    setInterval(()=>{
      if(check){
        i++
        if(i>=text[index].length) {
          check = false;
          speed = 10;
        }
      }else{
        i--;
        if(i<0) {
          check = true;
          speed = 100;
          index++;
          i=0;
        }
      }
      if(index>=text.length) index = 0

      setCaption(text[index].substring(0,i))
      console.log(i)
    },speed)
  },[])

  useEffect(()=>{
    runText()
  },[])

  return (
    <section className='home' id='home'>
        <div className="overlay">
            <div className="container">
                <div className="name">Tran Trung Nghia</div>
                <div className="caption">I am a <span>{caption}</span></div>
                <div className="action">
                    <a href="" className='btn'>Hire Me</a>
                    <a href="" className='btn'>Download CV</a>
                </div>
            </div>
            <div className="home-listLink">
              <ul>
                {
                  home.map((item, index)=>{
                    return(
                      <li className="home-itemLink" key={index}>
                        <a href={item.path}>{item.icon}</a>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
        </div>
    </section>
  )
}
