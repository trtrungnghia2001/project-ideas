import React, { useCallback, useEffect, useState } from 'react'
import {nanoid} from 'nanoid'
import {AiOutlineZoomIn} from 'react-icons/ai'
import {AiOutlineLink} from 'react-icons/ai'

import {BiSkipPrevious} from 'react-icons/bi'
import {BiSkipNext} from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'

import img1 from '../asset/img/item-1.jpg'
import img2 from '../asset/img/item-2.jpg'
import img3 from '../asset/img/item-3.jpg'
import img4 from '../asset/img/item-4.jpg'
import img5 from '../asset/img/item-5.jpg'
import img6 from '../asset/img/item-6.jpg'

const portfolios_btns=[
  {
    name: 'all',
    type: 'all',
    action: true,
  },
  {
    name: 'web design',
    type: 'web design',
    action: false,
  },
  {
    name: 'grapihc design',
    type: 'grapihc design',
    action: false,
  },
  {
    name: 'branding',
    type: 'branding',
    action: false,
  },
]

const portfolios_items=[
  {
    id: nanoid(),
    name:'project title',
    type: 'web design',
    link: '',
    img: img1,
  },
  {
    id: nanoid(),
    name:'project title',
    type: 'grapihc design',
    link: '',
    img: img2,
  },
  {
    id: nanoid(),
    name:'project title',
    type: 'branding',
    link: '',
    img: img3,
  },
  {
    id: nanoid(),
    name:'project title',
    type: 'web design',
    link: '',
    img: img4,
  },
  {
    id: nanoid(),
    name:'project title',
    type: 'grapihc design',
    link: '',
    img: img5,
  },
  {
    id: nanoid(),
    name:'project title',
    type: 'branding',
    link: '',
    img: img6,
  },
]

export default function Portfolio() {

  const [btns, setBtns] = useState(portfolios_btns)
  const [items, setItems] = useState(portfolios_items)

  const handbleClick = (value)=>{
    setBtns(()=> btns.map(item=>{
      item.type===value? item.action=true : item.action= false
      return item
    }))

    setItems(()=>portfolios_items.filter(item=>{
      if(value==='all') return portfolios_items
      return item.type === value
    }))
  }

  
  const [zoomItem, setZoomItem] = useState(false)
  const [current, setCurrent] = useState(0)
  const [imgZoom, setImgZoom] = useState(false)

  const handbleClickZoom = (id)=>{
    setZoomItem(true)
    let id_current;
    portfolios_items.filter((item, index)=>{
     if(item.id===id) id_current = index
    })
    setCurrent(id_current)
  }

  const handbleClickNext = ()=> {
    current+1>=portfolios_items.length? setCurrent(0) : setCurrent(current+1)
  }
  const handbleClickPrev = ()=> {
    current-1<0? setCurrent(portfolios_items.length-1) : setCurrent(current-1)
  }
  
  const zoom = useCallback(() =>{
    setImgZoom(()=>portfolios_items[current].img)
  }, [current])

  useEffect(()=>{
    zoom()
  },[current, zoom])


  return (
    <section className="section portfolio" id='portfolio'>
      <div className="container">
        <div className="section-title">
          MY PORTFOLIO
        </div>
        <div className="section-main portfolio-main">
          <div className="portfolio-btns">
            {
              btns.map((item,index)=>{
                return(
                  <button className={item.action? 'btn btn-filter btn-action' : 'btn btn-filter'} 
                    key={index} onClick={()=>handbleClick(item.type)}>
                    {item.name}
                  </button>
                )
              })
            }
          </div>
          <div className="portfolio-filter grid">
            {
              items.map((item,index)=>{
                return(
                  <div className="filter-item" key={index}>
                    <div className="filter-item__img">
                      <img src={item.img} alt="" />
                    </div>
                    <div className="filter-item__overlay">
                      <div className="filter-item__overlay-content">
                        <div className="filter-item__name">
                          {item.name}
                        </div>
                        <div className="filter-item__type">
                          {item.type}
                        </div>
                        <div className="filter-item__action">
                          <button onClick={()=>handbleClickZoom(item.id)}>
                            <AiOutlineZoomIn className='icon'/>
                          </button>
                          <a href={item.link}>
                            <AiOutlineLink className='icon'/>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
          {
            (zoomItem)&&
            <div className="portfolio-zoom">
            <div className="zoom__img">
              <img src={imgZoom} alt="" />
            </div>
            <div className="zoom__prev" onClick={handbleClickPrev}>
              <BiSkipPrevious/>
            </div>
            <div className="zoom__next" onClick={handbleClickNext}>
              <BiSkipNext/>
            </div>
            <div className="zoom__close" onClick={()=>setZoomItem(false)}>
              <AiOutlineClose/>
            </div>
            </div>
          }
        </div>
      </div>
    </section>
  )
}
