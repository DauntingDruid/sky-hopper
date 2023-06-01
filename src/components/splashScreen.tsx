import React from 'react'
import skyHopperLogo from "../assets/img/skyhopper_logo.png";
import { motion } from 'framer-motion'

const SplashScreen = () => {
  return (
    <motion.div 
        initial={{
        opacity:1,
        right: -200,
      }}
      animate={{
        right: 0,
      }}
      exit={{opacity:0}}
    className='flex justify-center items-center bg-white h-screen w-screen absolute'>
        <img className="h-20 w-20 animate-pulse" src={skyHopperLogo} alt="logo" />
    </motion.div>
  )
}

export default SplashScreen