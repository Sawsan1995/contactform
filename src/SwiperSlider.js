import './App.css'
import { Component } from 'react';
import './SwiperSlider.css';
import React from 'react';
import { Pagination } from 'swiper';
import { Navigation } from 'swiper';
import { Scrollbar } from 'swiper';
import { A11y } from 'swiper';
import { EffectFade } from 'swiper';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import 'swiper/swiper.min.css';
import 'swiper/modules/pagination/pagination.min.css';
import slider1 from './imgs/featured-2-1.jpg';
import slider2 from './imgs/featured-4-1.jpg';
import slider3 from './imgs/featured-5-2.jpg';
import slider4 from './imgs/spain6-1.jpg';


class SwiperSlider extends Component{
    render(){
        return  <Swiper pagination={true} 
        autoplay={{
            "delay": 2500,
            "disableOnInSwiperteraction": false
          }}  
        className="mySwiper"
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
            <div className='imgwrap'>
                <img src={slider1}/>
                <div className='overlaydiv'>
                    <h4>
                    Pixel perfection even for Retina Displays
                    </h4>
                    <p>
                     ALorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed odio nibh, 
                    </p>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='imgwrap'>
                <img src={slider2}/>
                <div className='overlaydiv'>
                    <h4>
                    Pixel perfection even for Retina Displays
                    </h4>
                    <p>
                     ALorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed odio nibh, 
                    </p>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='imgwrap'>
                <img src={slider3}/>
                <div className='overlaydiv'>
                    <h4>
                    Pixel perfection even for Retina Displays
                    </h4>
                    <p>
                     ALorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed odio nibh, 
                    </p>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='imgwrap'>
                <img src={slider4}/>
                <div className='overlaydiv'>
                    <h4>
                    Pixel perfection even for Retina Displays
                    </h4>
                    <p>
                     ALorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed odio nibh, 
                    </p>
                </div>
            </div>
        </SwiperSlide>

      </Swiper>
    }
}

export default SwiperSlider;