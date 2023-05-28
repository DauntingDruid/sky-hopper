import React from 'react'
import NavBar from '../components/navBar'
import HeroCard from '../components/heroCard'
import Footer from '../components/footer'
import LocationGrid from '../components/locationGrid'
import { ToastContainer } from 'react-toastify'

const HomePage = () => {

  return (
    <div className='flex flex-col min-h-screen'>
        {/* nav section */}
        <NavBar />
        {/* Search section */}
        <HeroCard />
        {/* middle section */}
        <LocationGrid />
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          />
        <Footer />  
    </div>
  )
}

export default HomePage