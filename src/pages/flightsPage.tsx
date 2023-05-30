import React from 'react'
import FlightCards from '../components/flightCards';
import SearchBar from '../components/searchBar';
import {flights} from '../data/flights';

const FlightsPage = () => {

  return (
    <>
    <div className='flex justify-center items-center w-full p-4 bg-blue-200'>
      <div className='w-5/6'>
        <SearchBar />  
      </div>
    </div>
    <FlightCards flights={flights} />
    </>
  )
}

export default FlightsPage