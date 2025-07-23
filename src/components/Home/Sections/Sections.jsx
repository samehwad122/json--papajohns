import React from 'react'
import "./Sections.css"
import imgSec1 from "../../../../public/images/sections/menu.jpg"
import imgSec2 from "../../../../public/images/sections/branches.jpg"
import imgSec3 from "../../../../public/images/sections/better.jpg"
import imgSec4 from "../../../../public/images/sections/careers.jpg"
import { useLanguage } from '../../context/LangContext'
import { useNavigate } from 'react-router-dom'

function Sections() {

    const { lang } = useLanguage();
    const pizzas = useNavigate();
    const quality = useNavigate();
    const branches = useNavigate();



  return (
    <div className='Sections my-2'>
      <div className="row g-3 flex">
        <div className="col-lg-3 col-md-6 col-sm-9 col-12">
          <div className='card'>
            <div>
              <img className='card-img' src={imgSec1} />
            </div>
            <div className='p-3 w-100 d-flex justify-content-center align-items-center'>
              <button onClick={()=> pizzas('/pizzas')}>{lang === 'ar' ? 'عرض قائمة الطعام' : 'View Our Menu Items'}</button>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-9 col-12">
          <div className='card'>
            <div>
              <img className='card-img' src={imgSec2} />
            </div>
            <div className='p-3 w-100 d-flex justify-content-center align-items-center'>
              <button onClick={()=> branches('/branches')}>{lang === 'ar' ? 'عرض الفروع' : 'View Our Branches'}</button>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-9 col-12">
          <div className='card'>
            <div>
              <img className='card-img' src={imgSec3} />
            </div>
            <div className='p-3 w-100 d-flex justify-content-center align-items-center'>
              <button onClick={()=> quality('/quality')}>{lang === 'ar' ? 'عرض الجودة' : 'View Our Quality'}</button>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-9 col-12">
          <div className='card'>
            <div>
              <img className='card-img' src={imgSec4} />
            </div>
            <div className='p-3 w-100 d-flex justify-content-center align-items-center'>
              <button>{lang === 'ar' ? 'الوظائف' : 'View Our Careers'}</button>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Sections
