import React from 'react'
import "./Topbar.css"
import { useLanguage } from '../../context/LangContext';
import { Link } from 'react-router-dom';
function Topbar() {
  const { lang, toggleLang } = useLanguage();



  return (
          <div className="top-bar bg-light border-bottom py-2 text-dark small">
      <div className="container d-flex justify-content-between align-items-center">
        {/* الجهة اليمنى */}
        <div className="right d-flex gap-3 align-items-center">
          <Link to={"/contacts"} className="text-dark text-decoration-none">
            {lang === 'ar' ? 'اتصل بنا' : 'Contact Us'}
          </Link>
          <Link to="/careers" className="text-dark text-decoration-none">
            {lang === 'ar' ? 'وظائف' : 'Careers'}
          </Link>
          <a href="tel:19277" className="tel text-decoration-none fw-bold">
            📞 19277
          </a>
        </div>

        {/* الجهة اليسرى */}
        <div>
          <button
            onClick={toggleLang}
          >
            {lang === 'ar' ? 'English' : 'العربية'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Topbar
