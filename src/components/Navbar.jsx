import { navlinks } from '@/data/navbar'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav>
        {
            navlinks.map((nav, index)=>(
                <Link key={index} href={nav.link} className='capitalize ml-4 hover:text-yellow-500  duration-200 ease-in-out'>{nav.title}</Link>
            ))
        }
    </nav>
  )
}

export default Navbar