import React from 'react'
import Card from '../Card'
import { majorService } from '@/data/service'

const Services = () => {
  return (
    <div className='text-center'>
      <h4 className="text-2xl font-extrabold">Services We Provide</h4>
      <div className="h-1 w-20 bg-yellow-500 text-center"></div>
        <div className="flex items-center justify-around flex-wrap my-6">
          {
            majorService.map((serve)=>(
              <Card icon={serve.icon} title={serve.title} detail={serve.detail} />
            ))
          }
        </div>
    </div>
  )
}

export default Services