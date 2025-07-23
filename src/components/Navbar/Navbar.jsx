import React from 'react';
import './Navbar.css';
import Topbar from './Topbar/Topbar';
import { useLanguage } from '../context/LangContext';
import logoAR from "../../../public/images/papalogo_sm_ar.png";
import logoEN from "../../../public/images/papalogo_sm.png";
import { NavLink } from 'react-router-dom';

function Navbar() {
  const { lang } = useLanguage();

  return (
    <>
      <Topbar />

      <a href="#" className="d-flex w-100 justify-content-center">
        <img src={lang === 'ar' ? logoAR : logoEN} alt="logo" />
      </a>

      <nav className={`navbar navbar-expand-lg ${lang === 'ar' ? 'rtl' : 'ltr'}`}>
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className={`navbar-nav mb-2 mb-lg-0 ${lang === 'ar' ? 'ms-auto' : 'me-auto'}`}>
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                >
                  {lang === 'ar' ? 'الصفحه الرئيسيه' : 'Home'}
                </NavLink>
              </li>

              <li className="nav-item dropdown">
                <span
                  className="nav-link dropdown-toggle text-light"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {lang === 'ar' ? 'القائمة' : 'Menu'}
                </span>
                <ul className="dropdown-menu custom-dropdown">
                  <li><NavLink to="/promotions" className="dropdown-item">{lang === 'ar' ? 'العروض' : 'Promotions'}</NavLink></li>
                  <li><NavLink to="/pizzas" className="dropdown-item">{lang === 'ar' ? 'البيتزا' : 'Pizzas'}</NavLink></li>
                  <li><NavLink to="/appetizers" className="dropdown-item">{lang === 'ar' ? 'المقبلات' : 'Appetizers'}</NavLink></li>
                  <li><NavLink to="/desserts" className="dropdown-item">{lang === 'ar' ? 'الحلويات والمشروبات' : 'Desserts and Drinks'}</NavLink></li>
                  <li><NavLink to="/crunchy" className="dropdown-item">{lang === 'ar' ? 'كرانشي بابادايس الجديده' : 'New Crunchy Papadias'}</NavLink></li>
                </ul>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/quality"
                  className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                >
                  {lang === 'ar' ? 'الجوده' : 'Quality'}
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/branches"
                  className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                >
                  {lang === 'ar' ? 'الفروع' : 'Branches'}
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/service"
                  className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                >
                  {lang === 'ar' ? 'خدمه العملاء' : 'Customer Service'}
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
