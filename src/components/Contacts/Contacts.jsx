import React from 'react';
import './Contacts.css';
import { useLanguage } from '../context/LangContext';

function Contacts() {
  const { lang } = useLanguage();

  return (
    <div className='contacts-page'>
      <p>{lang === 'ar' ? 'اتصل بنا' : 'Contact Us'}</p>

      <div className='contact-info'>
        <h2>{lang === 'ar' ? 'المكتب الرئيسي' : 'Head Office'}</h2>

        <ul>
          <li>
            <strong>{lang === 'ar' ? 'العنوان:' : 'Address:'}</strong>
            {lang === 'ar'
              ? ' 99 شارع الثورة، مصر الجديدة، القاهرة، مصر'
              : '99 El-Thawra Street, Heliopolis, Cairo, Egypt'}
          </li>
          <li>
            <strong>{lang === 'ar' ? 'الخط الساخن:' : 'Hotline:'}</strong>
            19277
          </li>
          <li>
            <strong>{lang === 'ar' ? 'البريد الإلكتروني:' : 'Email:'}</strong>
            <a href="mailto:info@papajohnsegypt.com">info@papajohnsegypt.com</a>
          </li>
          <li>
            <strong>{lang === 'ar' ? 'الموقع الإلكتروني:' : 'Website:'}</strong>
            <a href="https://www.papajohnsegypt.com" target="_blank" rel="noopener noreferrer">
              www.papajohnsegypt.com
            </a>
          </li>
        </ul>
      </div>

      <div className='map-container'>
        <iframe
          title="Papa John's Egypt Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.4196539427194!2d31.329391174785726!3d30.053450474918944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583df1e8a60c81%3A0xa68ef428be9d83c6!2zOTkg2YXYr9mK2YbYqSDYp9mE2KzZhNiq2LPYqSDYp9mE2YXYsdin2Kog2KfZhNiz2YXYqSDYp9mE2KrZg9mG2Yog2YTZhNmF2LHYp9iq!5e0!3m2!1sar!2seg!4v1721717740135!5m2!1sar!2seg"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Contacts;
