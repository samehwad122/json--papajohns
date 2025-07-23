import React, { useContext } from 'react'
import "./Crunchy.css"
import { useLanguage } from '../context/LangContext';
import { apiContext } from '../context/apiContext';
function Crunchy() {
       const { lang } = useLanguage();
      const { crunchy } = useContext(apiContext);
  return (
    <div className='Crunchy mt-5 mb-3' >
                      <p>{lang === 'ar' ? ' كرانشي بابادياس الجديدة' : 'New Crunchy Papadias'}</p>
      
                <div className="row g-3">
            {crunchy?.map((val , index)=>{
              return(
              <div key={index} className='col-lg-3 col-md-6 col-sm-9 col-12'>
              <div className="card">
                <img className='card-img' src={val?.image} alt={{}} />
                <div className="card-body">
                  <b className='flex'> {lang === 'ar' ? val?.nameAR : val?.name}</b>
                  <p>{lang === 'ar' ? val?.DescriptionAR : val?.Description}</p>
                    
                    <div className="dataPice flex mt-5">
                  <div>
                    <span style={{color:'transparent'}}>000000</span>
                    <p>{val.price}L.E</p>
                  </div>
      
                    </div>
      
      
                </div>
              </div>
              </div>
              )
      
            })}
            
      
                </div>
    </div>
  )
}

export default Crunchy
