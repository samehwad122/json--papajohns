import React, { useContext } from 'react'
import "./Promotions.css"
import { useLanguage } from '../context/LangContext';
import { apiContext } from '../context/apiContext';
function Promotions() {
const { lang } = useLanguage();
  const { allpostars } = useContext(apiContext);


    return (
    <div className='Promotions mt-5 mb-3'>
    <p>{lang === 'ar' ? 'العروض' : 'PROMOTIONS'}</p>

      <div className="row g-3 ">
        {allpostars.map((val , index)=>{
          return(
            <div key={index} className="col-md-6 col-12">
            <div >
              <img className='w-100' src={val?.post} />
            </div>
      </div>

          )
        })}



      </div>
    





    </div>
    )
    }

    export default Promotions
