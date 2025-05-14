import React from 'react'
import Header from './Components/Header'
import Brands from './Components/Brands'
import PeopleTalk from './Components/PeopleTalk'
import Hero from './Components/Hero'
import Cards from './Components/Cards'
import WeDo from './Components/WeDo'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <WeDo/>
      <Cards/>
      <Brands/>
      <PeopleTalk/>
      <Footer/>
    </div>
  )
}

export default App