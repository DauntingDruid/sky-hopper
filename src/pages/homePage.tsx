import React from 'react'
import HeroCard from '../components/heroCard'
import Footer from '../components/footer'
import LocationGrid from '../components/locationGrid'
import { ToastContainer } from 'react-toastify'
import {motion} from 'framer-motion'

const HomePage = () => {

  return (
    <motion.div
      initial={{
        opacity:0
      }}
      animate={{
        opacity:1
      }}
      exit={{opacity:0}}
    className='flex flex-col min-h-screen'>
        {/* nav section */}
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
    </motion.div>
  )
}

export default HomePage