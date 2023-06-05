import React from 'react'

const resume=[
  {
    title: 'Full Stack Developer',
    daite: '2017 - 2019 | Freelance',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ab quo officiis! Voluptatum omnis pariatur, magnam consectetur beatae praesentium reiciendis dicta, quaerat commodi dolorem illo possimus id corrupti. Incidunt, reprehenderit.',
  },
  {
    title: 'Full Stack Developer',
    daite: '2017 - 2019 | Freelance',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ab quo officiis! Voluptatum omnis pariatur, magnam consectetur beatae praesentium reiciendis dicta, quaerat commodi dolorem illo possimus id corrupti. Incidunt, reprehenderit.',
  },
  {
    title: 'Full Stack Developer',
    daite: '2017 - 2019 | Freelance',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ab quo officiis! Voluptatum omnis pariatur, magnam consectetur beatae praesentium reiciendis dicta, quaerat commodi dolorem illo possimus id corrupti. Incidunt, reprehenderit.',
  },
  {
    title: 'Full Stack Developer',
    daite: '2017 - 2019 | Freelance',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ab quo officiis! Voluptatum omnis pariatur, magnam consectetur beatae praesentium reiciendis dicta, quaerat commodi dolorem illo possimus id corrupti. Incidunt, reprehenderit.',
  },
  {
    title: 'Full Stack Developer',
    daite: '2017 - 2019 | Freelance',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ab quo officiis! Voluptatum omnis pariatur, magnam consectetur beatae praesentium reiciendis dicta, quaerat commodi dolorem illo possimus id corrupti. Incidunt, reprehenderit.',
  },
]

export default function Resume() {
  return (
    <section className='resume section' id='resume'>
      <div className="container">
        <div className="section-title">
          MY RESUME
        </div>
        <div className="section-main resume-main">
          <ul>
            {
              resume.map((item,index)=>{
                return(
                  <li key={index}>
                    <div className="resume-item" >
                      <div className="resume-item__title">
                        {item.title}
                      </div>
                      <div className="resume-item__date">
                        {item.daite}
                      </div>
                      <p>{item.content}</p>
                    </div>
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
