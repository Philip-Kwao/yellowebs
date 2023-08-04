import Link from 'next/link'
import React from 'react'

const Button = ({title, link}) => {
  return (
    <Link href={link} className="bg-yellow-400 text-white hover:bg-yellow-500 duration-200 ease-in-out py-4 px-6 text-sm rounded-lg hover:rounded-xl">{title}</Link>
  )
}

export default Button