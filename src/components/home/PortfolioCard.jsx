import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const PortfolioCard = ({link, image, alt}) => {
  return (
    <div className=''>
        <Link href={link} target='_blank'>
            <Image src={image} alt={alt} className='w-96 rounded-xl shadow-xl hover:shadow-orange-500 duration-200 ease-in-out hover:scale-110' />
        </Link>
    </div>
  )
}

export default PortfolioCard