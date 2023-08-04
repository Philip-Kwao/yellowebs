import Link from 'next/link'
import React from 'react'
import {BsInstagram, BsTwitter} from 'react-icons/bs'
import {FaLinkedinIn} from 'react-icons/fa'
const Social = () => {
  return (
    <div className='flex flex-col items-center justify-between'>
        <Link href={""} className="hover:text-yellow-500 duration-200 text-2xl m-6"><BsInstagram /></Link>
        <Link href={""} className="hover:text-yellow-500 duration-200 text-2xl m-6"><FaLinkedinIn /></Link>
        <Link href={""} className="hover:text-yellow-500 duration-200 text-2xl m-6"><BsTwitter /></Link>
    </div>
  )
}

export default Social