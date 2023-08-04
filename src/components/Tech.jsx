import { technology } from '@/data/service'
import Image from 'next/image'
import React from 'react'

const Tech = () => {
  return (
    <div className='w-screen bg-stone-200 py-8 px-5'>
        <h4 className='text-center text-xl mb-20'>We use the best and latest technologies build you  the fastest web presence</h4>
        <div className="flex items-center justify-around flex-wrap">
            {
                technology.map((tech)=>(
                    <span className="hover:bg-yellow-500 rounded-full duration-200 ease-in-out p-5">
                        <Image src={tech.icon} alt={tech.name} width={50} height={50} />
                    </span>
                ))
            }
        </div>
    </div>
  )
}

export default Tech