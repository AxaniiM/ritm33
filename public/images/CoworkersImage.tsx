import Image from 'next/image'
import React from 'react'
import coworkers from '@/public/coworkers.jpg'

const CoworkersImage = () => {
  return (
    <Image src={coworkers} alt='teammates with devices' ></Image>
  )
}

export default CoworkersImage

