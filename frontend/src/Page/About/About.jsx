import React from 'react'
import companyImage from "../../assets/Image2.jpg"

const About = () => {
  return (
    <div className='container mx-auto px-4 py-32 max-w-7xl'>
      <div className='relative rounded-2xl overflow-hidden shadow-2xl mb-24'>
        <img src={companyImage} className='w-full h-full object-cover' />
        <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900'></div>
      </div>
      
    </div>
  )
}

export default About
