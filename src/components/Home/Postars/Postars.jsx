import React, { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import { apiContext } from '../../context/apiContext';
import './Postars.css';

function Postars() {
  const { allPostars } = useContext(apiContext);

  const showPostars = Array.isArray(allPostars) && allPostars.length > 0 ? (
    allPostars.map((val, index) => (
      <SwiperSlide key={index}>
        <img className='w-100' src={val.post} alt="" />
      </SwiperSlide>
    ))
  ) : (
    <SwiperSlide>
      <img className='w-100' src="/fallback.jpg" alt="No posters available" />
    </SwiperSlide>
  );

  return (
    <div className='Postars'>
      <Swiper
        cssMode={true}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        loop={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        autoplay={{
          delay: 3000,
          pauseOnMouseEnter: true
        }}
        pagination={{
          clickable: true,
        }}
        className="mySwiper my-3"
      >
        {showPostars}
      </Swiper>
    </div>
  );
}

export default Postars;
