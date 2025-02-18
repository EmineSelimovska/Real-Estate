import 'react'
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react';
import 'swiper/css';
import './Residencies.css';
import data from '../../utils/slider.json'

function Residencies() {
  return (
    <section className="r-wrapper">
      <div className="r-container">
        <div className="r-head ">
          <span>Най-популярни предложения</span>
        </div>

        <Swiper>
          {
            data.map((res, i) => (
             <SwiperSlide key={i}>
              <div className="r-card">
              <img src={res.image} style={{width: "30%", height: "30%"}} alt="home" />

              <span className="r-price">
              <span>{res.price} </span>
              <span style={{color: " #ff4400"}}>€ </span>
              </span>

              <span className='resName'>{res.name}</span>
              <span className='resName'>{res.detail}</span>
              </div>
             </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </section>
  )
}

export default Residencies;