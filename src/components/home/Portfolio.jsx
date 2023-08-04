"use client"
import { portfolio } from '@/data/portfolio';
import React from 'react'
import { useRef, useEffect } from 'react';
import { register } from 'swiper/element/bundle';
import PortfolioCard from './PortfolioCard';

const Portfolio = () => {

  register();

  const swiperElRef = useRef(null);

  useEffect(() => {
  // listen for Swiper events using addEventListener
  swiperElRef.current.addEventListener('progress', (e) => {
    const [swiper, progress] = e.detail;
    console.log(progress);
  });

  swiperElRef.current.addEventListener('slidechange', (e) => {
    console.log('slide changed');
  });
  }, []);

  return (
    <div className=' flex-wrap items-center justify-between mx-auto my-10'>
    <swiper-container
      ref={swiperElRef}
      slides-per-view="3"
      // navigation="true"
      pagination={{
        clickable: 'true',
        dynamicBullets: 'true'
      }}
      centerSlides='true'
      autoplay={{
        delay: 6500,
        disableOnInteraction: false,
      }}
    >
      {
        portfolio.map((port)=>(
          <swiper-slide>
            <PortfolioCard link={port.link} image={port.image} alt={port.alt} />
          </swiper-slide>
        ))
      }

    </swiper-container>
    </div>
  )
}

export default Portfolio