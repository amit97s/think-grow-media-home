import React from 'react'
import Header from './Components/Header'
import Brands from './Components/Brands'
import PeopleTalk from './Components/PeopleTalk'
import Hero from './Components/Hero'
import Cards from './Components/Cards'
import WeDo from './Components/WeDo'
import Footer from './Components/Footer'
import OurWorks from './Components/OurWorks'

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#961B2F] via-[#6B131F] to-[#961B2F]">
      <Header />
      <Hero />
      <Cards />
      <WeDo />
      <Brands />
      <OurWorks />
      <PeopleTalk />
      <Footer />
    </div>
  )
}

export default App