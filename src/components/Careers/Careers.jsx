// src/components/Careers/Careers.jsx

import React from 'react';
import './Careers.css';
import { useLanguage } from '../context/LangContext';

function Careers() {
  const { lang } = useLanguage();

  return (
    <div className='careers-page' dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <p>{lang === 'ar' ? 'الوظائف' : 'Careers'}</p>

      <p>
        {lang === 'ar'
          ? 'بابا جونز من وقت لآخر يبحث عن موظفين جدد للانضمام إلى بيئة عمل مليئة بالحماس والدعم، حيث يتم تحسين جودة العمل من خلال فريق متعاون وبيئة ودية. نجاحنا يأتي من الاستثمار فيك. إذا كنت مهتمًا، أرسل سيرتك الذاتية إلى hr@papajohnsegypt.com وسنتواصل معك قريبًا.'
          : `Papa John's from time to time will be seeking to fill positions, to join our enthusiastic environment of professionals, who identify & improve the quality of what they deliver by working with a supportive team and friendly environment, and be a part of Papa John's family. Our success comes from investing in you. If you are interested, send your CV to hr@papajohnsegypt.com and we will contact you shortly.`}
      </p>

      <b>
        {lang === 'ar'
          ? 'يرجى كتابة كود الوظيفة في عنوان الرسالة'
          : 'PLEASE INCLUDE JOB CODE IN SUBJECT'}
      </b>

      <ul>
        {lang === 'ar' ? (
          <>
            <li>- 01 مدير تدريب</li>
            <li>- 02 منسق تدريب</li>
            <li>- 03 مدير منطقة</li>
            <li>- 04 مدير مطعم</li>
            <li>- 05 مساعد مدير مطعم</li>
            <li>- 06 مشرف مطعم</li>
            <li>- 07 شيف</li>
            <li>- 08 نادل</li>
            <li>- 09 مندوب توصيل</li>
            <li>- 11 موظف خدمة عملاء</li>
          </>
        ) : (
          <>
            <li>- 01 Training Manager</li>
            <li>- 02 Training Coordinator</li>
            <li>- 03 Area Manager</li>
            <li>- 04 Restaurant Manager</li>
            <li>- 05 Restaurant Manager Assistant</li>
            <li>- 06 Restaurant Supervisor</li>
            <li>- 07 Chef</li>
            <li>- 08 Waiter</li>
            <li>- 09 Delivery Men</li>
            <li>- 11 Customer Service Agents</li>
          </>
        )}
      </ul>
    </div>
  );
}

export default Careers;
