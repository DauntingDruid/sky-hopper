import React from 'react'
import NavBar from '../components/navBar'
import HeroCard from '../components/heroCard'
import Footer from '../components/footer'
import LocationGrid from '../components/locationGrid'

const HomePage = () => {

  return (
    <div className=''>
        {/* nav section */}
        <NavBar />
        {/* Search section */}
        <HeroCard />
        {/* middle section */}
        <LocationGrid />
        <Footer />  
    </div>
  )
}

export default HomePage