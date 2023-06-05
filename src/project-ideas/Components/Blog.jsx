import React from 'react'

import {BsFillCalendarDayFill} from 'react-icons/bs'
import {AiOutlineComment} from 'react-icons/ai'

import img1 from '../asset/img/1.jpg'
import img2 from '../asset/img/2.jpg'
import img3 from '../asset/img/3.jpg'

const blog=[
  {
    img: img1,
    category: 'design',
    title:'Post title goes here', 
    date: new Date().toDateString(),
    comment: 10,
    content: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum totam eum possimus iure unde animi! Rem sit laboriosam modi nisi maiores esse suscipit, autem natus doloremque pariatur nostrum! Nihil, incidunt?`,
  },
  {
    img: img2,
    category: 'logo',
    title:'Post title goes here', 
    date: new Date().toDateString(),
    comment: 10,
    content: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum totam eum possimus iure unde animi! Rem sit laboriosam modi nisi maiores esse suscipit, autem natus doloremque pariatur nostrum! Nihil, incidunt?`,
  },
  {
    img: img3,
    category: 'branding',
    title:'Post title goes here', 
    date: new Date().toDateString(),
    comment: 10,
    content: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum totam eum possimus iure unde animi! Rem sit laboriosam modi nisi maiores esse suscipit, autem natus doloremque pariatur nostrum! Nihil, incidunt?`,
  },
]

export default function Blog() {
  return (
    <section className="blog section" id="blog">
      <div className="container">
        <div className="section-title">
        MY BLOG
        </div>
        <div className="section-main blog-main grid">
          {
            blog.map((item,index)=>{
              return(
                <div className="itemBlog box" key={index}>
                  <div className="itemBlog__img">
                    <img src={item.img} alt="" />
                    <div className="itemBlog__category">
                      {item.category}
                    </div>
                  </div>
                  <div className="itemBlog__content">
                    <div className="itemBlog__title">
                      {item.title}
                    </div>
                    <div className="itemBlog__info">
                      <p><span><BsFillCalendarDayFill/></span>{item.date}</p>
                      <p><span><AiOutlineComment/>{item.comment}</span> Comment</p>
                    </div>
                    <div className="itemBlog__post">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis beatae repudiandae dolorum. Enim maxime similique et rerum quibusdam voluptatem, culpa eos provident perspiciatis consequuntur veniam debitis magni eligendi aut nobis?</p>
                    </div>
                    <div className="itemBlog__action">
                      <a href="">read more</a>
                    </div>
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
