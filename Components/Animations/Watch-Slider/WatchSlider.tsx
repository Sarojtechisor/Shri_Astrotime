"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styles from './watchslider.module.css';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function WatchSlider() {
  return (
    <>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        freeMode={true}
        pagination={{
          clickable: false,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className={styles.MySwiper}
      >
        <SwiperSlide className='m-8'><img src="/Images/Watch-Images/English_Red.png" alt="Panchang watch" /></SwiperSlide>
        <SwiperSlide><img className='' src="/Images/Watch-Images/Hindi_Red.png" alt="" /></SwiperSlide>
        <SwiperSlide><img className='mt-12' src="/Images/Watch-Images/Kannada_Green.png" alt="" /></SwiperSlide>
        <SwiperSlide><img className='m-5' src="/Images/Watch-Images/Tamil_Blue.png" alt="" /></SwiperSlide>
        <SwiperSlide><img className='' src="/Images/Watch-Images/Telugu_Blue.png" alt="" /></SwiperSlide>

      </Swiper>
    </>
  );
}
