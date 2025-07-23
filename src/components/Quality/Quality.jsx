import React from 'react';
import "./Quality.css";
import { useLanguage } from '../context/LangContext';
import img from "../../../public/images/quality.png";

function Quality() {
  const { lang } = useLanguage();

  return (
    <div className='Quality mt-5 mb-3'>
      <p className='quality-title'>{lang === 'ar' ? 'الجودة' : 'Quality'}</p>

      <div className="quality-content">
        <div className="quality-image">
          <img src={img} alt="quality" />
        </div>

        <div className="quality-text">
          <p className="sub-title">Our Pizza<br />Better ingredients. Better pizza.</p>
          <span>
            In 1984, Papa John's opened its doors with one goal in mind: Better Pizza. We knew that with better ingredients we would create better pizzas. That goal and the promise of "Better ingredients. Better pizza." remain true to this day.
            <br /><br />
            Our fundamental belief is simple: take care of your people and give them the best to work with and you will make superior quality pizza. This is what drives us and it's why we invest more than many others in the industry in our effort to consistently deliver superior pizza and superior service.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Quality;
