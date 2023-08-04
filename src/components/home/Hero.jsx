import React from 'react'
import Button from '../Button'
import Image from 'next/image'
import Person from '@/assets/images/hero-img.png'
import Social from '../Social'
const Hero = () => {
  return (
    <div className=" bg-stone-200 ">
      <div className="flex items-center justify-between flex-wrap max-w-[80vw] mx-auto">
        <div className="basis-1/2 relative">
          <div className="absolute -left-20 top-14">
            <Social />
          </div>
          <h1 className='text-4xl font-black'>Your Business Needs A Professional Web Presence.</h1>
          <p className="my-6">We are dedicated to delivering exceptional web solutions that help businesses grow and succeed online. With much experience and a talented team of designers, developers, and marketers, we provide customized website design, development, and digital marketing services that help our clients achieve their goals. Our approach is collaborative, transparent, and results-driven, and we are committed to delivering the highest quality work and customer service.</p>
          <Button title={'Learn More'} link={'about'} />
        </div>
        <div className="basis-1/2">
          <Image src={Person} width={500} height={500} alt="Hero Image" />
        </div>
      </div>
    </div>
  )
}

export default Hero