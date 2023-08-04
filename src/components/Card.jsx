import React from 'react'
import { BsArrowRightCircle, BsCodeSlash } from 'react-icons/bs'
import { MdWebhook } from 'react-icons/md'
import { BiCodeCurly} from 'react-icons/bi'
import Image from 'next/image'

const Card = ({icon, title, detail, key}) => {
  return (
    <div className='group bg-white shadow-2xl rounded-lg hover:scale-105 ease-in-out duration-200 max-w-[450px] min-h-[400px] flex flex-col justify-around items-center'>
        <span className="text-4xl font-bold text-center group-hover:bg-yellow-500 duration-200 ease-in-out p-4 rounded-full">
        <Image src={icon} alt='Service Icon' width={50} height={50} className='hover:bg-yellow-500 duration-200 ease-in-out' />
        </span>
        <h4 className='text-2xl font-bold'>{title}</h4>
        <p className='px-6'>{detail}</p>
        <span className='hover:translate-x-2 hover:scale-150 hover:text-yellow-500 duration-200 ease-in-out text-2xl font-bold text-center'>
            <BsArrowRightCircle />
        </span>
    </div>
  )
}

export default Card