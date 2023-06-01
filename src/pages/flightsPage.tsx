import React from 'react'
import FlightCards from '../components/flightCards';
import SearchBar from '../components/searchBar';
import {flights} from '../data/flights';
import {motion} from 'framer-motion'
const FlightsPage = () => {

  return (
    <>
    <motion.div
      initial={{
        opacity:0
      }}
      animate={{
        opacity:1
      }}
      exit={{opacity:0}}
      
      className='flex justify-center items-center w-full p-4 bg-blue-200'>
      <div className='w-5/6'>
        <SearchBar />  
      </div>
    </motion.div>
    <FlightCards flights={flights} />
    </>
  )
}

export default FlightsPage