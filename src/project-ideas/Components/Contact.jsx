import React from 'react'

import {MdLocationPin} from 'react-icons/md'
import {MdEmail} from 'react-icons/md'
import {FaPhoneAlt} from 'react-icons/fa'
import {RiEarthFill} from 'react-icons/ri'

const contact = [
  {
    icon: <MdLocationPin/>,
    name: 'location',
    value: [
      'NewYork, USA','10 Street Name'
    ]
  },
  {
    icon: <MdEmail/>,
    name: 'Email',
    value: [
      'Support@example.com','Support@example.com'
    ]
  },
  {
    icon: <FaPhoneAlt/>,
    name: 'Phone',
    value: [
      '+1 212 410-1845','+1 212 116-2145'
    ]
  },
  {
    icon: <RiEarthFill/>,
    name: 'Website',
    value: [
      'www.yourdomain.com'
    ]
  },
]

export default function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="section-title">
          contact me
        </div>
        <div className="section-main contact-main">
          <div className="contact-left box">
           {
            contact.map((item, index)=>{
              return(
                <div className="contact__item-info" key={index}>
                  <div className="contact__item-info-name">
                    {item.name}
                  </div>
                  <div className="contact__item-info-icon">
                    {item.icon}
                  </div>
                  <div className="contact__item-info-values">
                    {item.value.map((item,index)=>{
                      return(
                        <p key={index}>{item}</p>
                      )
                    })}
                  </div>
                </div>
              )
            })
           }
          </div>
          <div className="contact-right box">
            <form action="" className='contact-form'>
              <div className="contact-form__row">
                <input type="text" id='name' name='name' placeholder='Name' required/>
              </div>
              <div className="contact-form__row">
                <input type="email" id='email' name='email' placeholder='Email' required/>
              </div>
              <div className="contact-form__row">
                <input type="text" id='subject' name='subject' placeholder='Subject' required/>
              </div>
              <div className="contact-form__row">
                <textarea name="message" id="message" cols="30" rows="10" placeholder='Your Message' required></textarea>
              </div>
              <div className="contact-form__row">
                <button type='submit' className='btn'>Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
