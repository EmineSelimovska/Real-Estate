import 'react'
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react';
import 'swiper/css';
import './Residencies.css';
import '../../utils/slider.json'

function Residencies() {
  return (
    <section className="r-wrapper">
      <div className="r-container">
        <div className="r-head ">
          <span>Най-популярни предложения</span>
        </div>
      </div>
    </section>
  )
}

export default Residencies;