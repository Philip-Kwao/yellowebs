import React from 'react'
import Button from '../Button'
import Image1 from '@/assets/images/1.jpg'
import Image from 'next/image'

const About = () => {
  return (
    <div className="my-10">
      <div className='relative my-6'>
        <h2 className='text-2xl font-extrabold text-center'>About Us</h2>
        <p className='text-center'>Get to know us better</p>
        <span className="h-1 w-20 bg-yellow-500 absolute left-[50%] right-[50%]"></span>
      </div>
      <div className="grid grid-cols-3 items-center justify-around flex-wrap mx-auto max-w-[90vw]">
        <div className="max-w-[500px]">
          <h4 className='text-2xl font-extrabold'>
            Developing With Passion Using Latest Technologies
          </h4>
          <p className="my-4">
          Yellowebs have a team of experts who are skilled in all aspects of web design, including user experience, user interface design, coding, and digital marketing. We also stay up-to-date with the latest design trends and technologies.
          </p>
          <p className="mb-6">
          We are committed to delivering high-quality work that meets industry standards and best practices. We also have a process in place for testing and ensuring the website is functional and user-friendly.
          </p>
          <Button title={'Contact Us'} link={'contact'} />
        </div>
        <div className=" ">
          <p className="">
          We provide customized solutions that are tailored to your business needs and goals. 
          </p>
          <p className="my-4">
            We make it our priority to understand the brand identity and create a website that reflects their goals respectfully.
          </p>
        </div>
        <div className="max-w-[320px] mx-auto relative">
          <Image src={Image1} alt="Web Development" width={300} height={500} className="absolute top-24" />
          <div className="bg-yellow-500 h-80 w-48"></div>
        </div>
      </div>
    </div>
  )
}

export default About