import React from 'react'
import exom from '../assets/ecom.jpg'
import brands from '../assets/brands.jpg'
import digitalm from '../assets/digitalm.jpg'
import leads from '../assets/leads.jpg'
import seo from '../assets/seo.jpg'
import social from '../assets/social.jpg'
const Cards = () => {
  const cards = [
    { 
      id: 1, 
      title: 'E-commerce', 
      content: 'Boost your online sales with our comprehensive e-commerce solutions.',
      image: exom
    },
    { 
      id: 2, 
      title: 'Digital Marketing', 
      content: 'Strategic digital marketing campaigns that drive results.',
      image: digitalm
    },
    { 
      id: 3, 
      title: 'SEO', 
      content: 'Improve your search rankings and online visibility.',
      image: seo
    },
    { 
      id: 4, 
      title: 'Lead Generation', 
      content: 'Generate quality leads that convert into customers.',
      image: leads
    },
    { 
      id: 5, 
      title: 'Social Media', 
      content: 'Engage your audience across all social platforms.',
      image: social
    },
    { 
      id: 6, 
      title: 'Branding', 
      content: 'Build a strong, memorable brand identity.',
      image: brands
    },
  ]

  return (
    <div className='container mx-auto px-4 py-8 bg-gradient-to-b from-[#961B2F] to-[#961B2F]'>
      <div className='grid grid-cols-3 gap-4'>
        {cards.map((card) => (
          <div 
            key={card.id} 
            className='relative min-h-[500px] group overflow-hidden rounded-lg transform perspective-1000'
          >
            <img 
              src={`${card.image}`} 
              alt={card.title}
              className='absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110'
            />
            <div className='absolute inset-x-0 top-0 p-6 bg-gradient-to-b from-black/80 to-transparent'>
              <h3 className='text-3xl font-bold text-white'>{card.title}</h3>
            </div>
            <div 
              className='absolute inset-0 bg-gradient-to-b from-[#961B2F] to-[#961B2F] opacity-0 group-hover:opacity-100 
                       transition-all duration-700 ease-out transform translate-y-full group-hover:translate-y-0 
                       [transform-style:preserve-3d] group-hover:[transform:rotateX(10deg)] 
                       before:content-[""] before:absolute before:inset-0 before:bg-black/20 
                       before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-700 
                       after:content-[""] after:absolute after:inset-0 after:bg-gradient-to-b after:from-transparent 
                       after:to-black/30 after:opacity-0 group-hover:after:opacity-100 after:transition-opacity after:duration-700'
            >
              <div className='absolute inset-0 p-6 flex flex-col justify-end transform group-hover:translate-y-2 transition-transform duration-700 ease-out'>
                <h3 className='text-3xl font-bold text-white mb-4 transform group-hover:translate-y-[-8px] transition-transform duration-700 ease-out'>{card.title}</h3>
                <p className='text-lg text-gray-200 transform group-hover:translate-y-[-4px] transition-transform duration-700 ease-out'>{card.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cards