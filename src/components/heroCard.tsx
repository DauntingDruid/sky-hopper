import React, { useState } from 'react'
import SearchBar from './searchBar'

const HeroCard = () => {
  
  return (
    <div className='h-[35vh] flex justify-center items-center overflow-hidden'>
        {/* bg image */}
        <div className="absolute h-1/3 w-5/6 rounded-3xl bg-slate-200 bg-[url('img/natali-quijano-aircraft.jpg')] bg-cover bg-center hover:scale-105 transition-all ease-in-out duration-1000">
            <div className='relative w-full h-full rounded-3xl bg-slate-600 opacity-25' />
        </div>
        <div className='z-0 w-9/12 flex h-full flex-col '>
            <div className='flex-grow flex flex-col justify-center items-center ' >
              <p className='text-3xl font-medium  '>Book your flight with <span className='hover:text-blue-500 transition-all ease-in-out duration-500'>Sky Hopper!</span></p>
              <p className='text-xl pointer-events-none'>Millions of flights around the world are waiting for you</p>
            </div>
            <SearchBar />
        </div>
    </div>

  )
}

export default HeroCard