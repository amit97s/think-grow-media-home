import React, { useState } from 'react'

import tdc from '../assets/tdc.webp'
import wt from '../assets/wt.svg'
import prop from '../assets/prop.png'
import maac from '../assets/maac.jpeg'
import ll from '../assets/ll.png'
import leads from '../assets/leads.jpg'
import indraprasth from '../assets/indraprasth.png'
import hindi from '../assets/hindi.webp'
import gg from '../assets/gg.webp'
import eue from '../assets/eye.avif'
import dl from '../assets/dl.avif'
import dispatch from '../assets/dispatch.webp'
import bleo from '../assets/bleo.webp'

const OurWorks = () => {
  const [activeCategory, setActiveCategory] = useState('coding')

  const projects = {
    coding: [
      { image: dispatch, title: 'Transportation' },
      { image: tdc, title: 'Educational' },
      { image: wt, title: 'Traveling' },
      { image: prop, title: 'Property' },
    ],
    shopify: [
      { image: bleo, title: 'Fashion Store' },
      { image: dl, title: 'Lifestyle Brand' },
      { image: eue, title: 'Lifestyle Brand' },
      { image: leads, title: 'Lifestyle Brand' },
    ],
    wordpress: [
      { image: gg, title: 'Business Portfolio' },
      { image: hindi, title: 'Sports Academy' },
      { image: ll, title: 'Sports Academy' },
      { image: indraprasth, title: 'Sports Academy' },
      { image: maac, title: 'Sports Academy' },
    ]
  }

  return (
    <div className="w-full bg-gradient-to-b from-[#961B2F] via-[#2F0E13] to-[#2F0E13] py-24 relative z-[1] overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 z-[-1]">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-[#961B2F] blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-[#961B2F] blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Our Works</h2>
          <p className="text-red-200 text-lg max-w-2xl mx-auto">Explore our portfolio of successful projects that showcase our expertise and creativity</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12">
          <button
            onClick={() => setActiveCategory('coding')}
            className={`px-8 py-2.5 rounded-full font-medium transition-all duration-300 transform ${
              activeCategory === 'coding' 
                ? 'bg-[#961B2F] text-white shadow-lg shadow-[#961B2F] scale-105' 
                : 'bg-[#961B2F] text-white hover:bg-[#961B2F]'
            }`}
          >
            Coding
          </button>
          <button
            onClick={() => setActiveCategory('shopify')}
            className={`px-8 py-2.5 rounded-full font-medium transition-all duration-300 transform ${
              activeCategory === 'shopify' 
                ? 'bg-[#961B2F] text-white shadow-lg shadow-red-600/30 scale-105' 
                : 'bg-red-200/20 text-red-100 hover:bg-red-200/30'
            }`}
          >
            Shopify
          </button>
          <button
            onClick={() => setActiveCategory('wordpress')}
            className={`px-8 py-2.5 rounded-full font-medium transition-all duration-300 transform ${
              activeCategory === 'wordpress' 
                ? 'bg-[#961B2F] text-white shadow-lg shadow-[#961B2F] scale-105' 
                : 'bg-red-200/20 text-red-100 hover:bg-[#961B2F]'
            }`}
          >
            WordPress
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {projects[activeCategory].map((project, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-red-900/90 to-[#961B2F] p-1.5 transition-all duration-500 hover:from-[#961B2F] hover:to-[#961B2F] transform hover:scale-[1.02] hover:shadow-xl hover:shadow-[#961B2F]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#961B2F] to-[#961B2F] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
              
              <div className="relative h-[300px] w-full overflow-hidden rounded-lg bg-black z-10 px-20">
               
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-72 h-72 object-contain object-center transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 w-full p-6 z-30">
                  <h3 className="text-white text-xl font-bold transform transition-transform duration-300 group-hover:translate-y-0">
                    {project.title}
                  </h3>
                  <div className="w-12 h-1 bg-[#961B2F] mt-2 mb-2 transform origin-left transition-all duration-300 group-hover:w-24"></div>
                  <p className="text-red-200 text-sm opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    View project details
                  </p>
                </div>
                
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-20">
                  <button className="px-6 py-2 bg-[#961B2F] text-white rounded-full transform scale-95 transition-transform duration-300 hover:scale-100 opacity-0 group-hover:opacity-100">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OurWorks