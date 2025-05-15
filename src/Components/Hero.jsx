import React, { useRef } from 'react'
import vide from '../assets/vid1.mp4'
import vide1 from '../assets/xyz.avif'

const Hero = () => {
  const videoRef = useRef(null)

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play()
    }
  }

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

  return (
    <div className='h-[310px] flex bg-gradient-to-b from-[#4A161D] to-[#3D1218]'>
      <div className='w-[70%] relative flex flex-col justify-center px-12'>
        <img 
          src={vide1} 
          alt="background" 
          className='absolute inset-0 w-full h-full object-cover opacity-80'
        />
        <div className='relative z-10 text-white'>
          <p className='text-4xl font-extrabold tracking-wide'>The only  <p className='text-4xl font-bold text-white tracking-wider'>Digital Marketing Agency</p> you'll ever need.</p>
          <p className='text-3xl font-bold tracking-wider'>Your partner in growth.</p>
        </div>
      </div>
      <div 
        className='w-[30%] relative overflow-hidden cursor-pointer'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <video
          ref={videoRef}
          loop
          muted
          className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
          src={vide}
        />
        <div className='absolute inset-0 bg-gradient-to-b from-[] to-[] opacity-90'></div>
      </div>
    </div>
  )
}

export default Hero