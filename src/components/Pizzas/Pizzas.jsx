import React, { useContext } from 'react';
import './Pizzas.css';
import { apiContext } from '../context/apiContext';
import { useLanguage } from '../context/LangContext';

function Pizzas() {
  const { lang } = useLanguage();
  const { allPizzas } = useContext(apiContext);

  return (
    <div className='Pizzas mt-5 mb-3'>
      <p>{lang === 'ar' ? 'البيتزا' : 'PIZZAS'}</p>

      {!allPizzas || allPizzas.length === 0 ? (
        <p className="text-center my-5">{lang === 'ar' ? 'جاري التحميل...' : 'Loading...'}</p>
      ) : (
        <div className="row g-3">
          {allPizzas.map((val, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-sm-9 col-12">
              <div className="card">
                <img className='card-img' src={val?.image} alt={val?.name} />
                <div className="card-body">
                  <b className='flex'>{lang === 'ar' ? val.nameAR : val.name}</b>
                  <p className='my-3'>{lang === 'ar' ? val.DescriptionAR : val.Description}</p>

                  <span>{lang === 'ar' ? "اوريجينال كرست" : "Original crust"}</span>
                  <div className='flex dataPice'>
                    <div>
                      <span>{lang === 'ar' ? "صغير" : "Small"}</span>
                      <p>{val?.originalSmall} L.E</p>
                    </div>
                    <div>
                      <span>{lang === 'ar' ? "وسط" : "Medium"}</span>
                      <p>{val?.originalMedium} L.E</p>
                    </div>
                    <div>
                      <span>{lang === 'ar' ? "كبير" : "Large"}</span>
                      <p>{val?.originalLarge} L.E</p>
                    </div>
                  </div>

                  <div className='flex price gap-4'>
                    <span>{lang === 'ar' ? " ستافت كرست" : "Stuffed crust"}</span>
                    <span>{lang === 'ar' ? " ثين & كرنشي" : "Thin & Crunchy"}</span>
                  </div>

                  <div className='flex dataPice'>
                    <div>
                      <span>{lang === 'ar' ? "وسط" : "Medium"}</span>
                      <p>{val?.originalMedium} L.E</p>
                    </div>
                    <div>
                      <span>{lang === 'ar' ? "كبير" : "Large"}</span>
                      <p>{val?.originalLarge} L.E</p>
                    </div>
                    <div>
                      <span>{lang === 'ar' ? "كبير" : "Large"}</span>
                      <p>{val?.originalLarge} L.E</p>
                    </div>
                  </div>

                  <span>{lang === 'ar' ? "تشيز كرست" : "Cheese Crust"}</span>
                  <div className='flex dataPice'>
                    <div>
                      <span>{lang === 'ar' ? "وسط" : "Medium"}</span>
                      <p>{val?.originalMedium} L.E</p>
                    </div>
                    <div>
                      <span>{lang === 'ar' ? "كبير" : "Large"}</span>
                      <p>{val?.originalLarge} L.E</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Pizzas;
