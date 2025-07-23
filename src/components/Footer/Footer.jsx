import React from 'react'
import "./Footer.css"
import { useLanguage } from '../context/LangContext';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Footer() {
    const { lang } = useLanguage();
  
  return (
    <div className='Footer mt-5'>
                <ul className='flex'>
                  <li><Link to={'/promotions'} href="#">{lang === 'ar' ? 'العروض' : 'Promotions'}</Link></li>
                  <li><Link to={'/pizzas'} href="#">{lang === 'ar' ? 'البيتزا' : 'Pizzas'}</Link></li>
                  <li><Link to={'/appetizers'} href="#">{lang === 'ar' ? 'المقبلات' : 'Appetizers'}</Link></li>
                  <li><Link to={'/desserts'} href="#">{lang === 'ar' ? 'الحلويات والمشروبات' : 'Desserts and Drinks'}</Link></li>
                  <li><Link to={'/crunchy'} href="#">{lang === 'ar' ? 'كرانشي بابادايس الجديده' : 'New Crunchy Papadias'}</Link></li>
                </ul>
                   <ul className="flex">
              <li>
                <Link to={'/'} href="#">{lang === 'ar' ? 'الصفحه الرئيسيه' : 'Home'}</Link>
              </li>
              <li>
                <Link to={'/quality'} className='text-light'>{lang === 'ar' ? 'الجوده' : 'Quality'}</Link>
              </li>
              <li>
                <Link to={'/branches'} href="#">{lang === 'ar' ? 'الفروع' : 'Branches'}</Link>
              </li>
              <li>
                <Link to={'/service'} href="#">{lang === 'ar' ? 'خدمه العملاء' : 'Customer Service'}</Link>
              </li>
            </ul>
            <div className='facont flex'>
              <FaFacebookF className='fa'/>
              <FaInstagram className='fa'/>
            </div>
            <p className='flex mt-3 text-light'>{lang === 'ar' ? "© 2025 بابا جونز مصر": " © 2025 Papa John's Egypt"}</p>

    </div>
  )
}

export default Footer
