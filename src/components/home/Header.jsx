import React from 'react'
import Logo from '../Logo'
import Navbar from '../Navbar'
import Button from '../Button'

const Header = () => {
  return (
    <div className='flex items-center justify-between bg-stone-200 text-blue-950 px-7 py-4'>
        <div className="">
            <Logo />
        </div>
        <div className="">
            <Navbar />
        </div>
        <div className="">
            <Button link={'contact'} title={'Hire Us'} />
        </div>
    </div>
  )
}

export default Header