import Image from 'next/image'
import React from 'react'
import LogoImg from '@/assets/images/yw-logo.png'

const Logo = () => {
  return (
    <Image src={LogoImg} alt='yellowebs' width={50} height={50} />
  )
}

export default Logo