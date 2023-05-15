import React from 'react'
import SearchBar from './searchBar'

const HeroCard = () => {

  return (
    // overflow-hidden
    <div className='h-[35vh] flex justify-center items-center overflow-hidden'>
        <div className="absolute h-1/3 w-4/5 rounded-3xl bg-slate-200 bg-[url('img/natali-quijano-aircraft.jpg')] bg-cover bg-center hover:scale-105 transition-all ease-in-out duration-1000">
            <div className='relative w-full h-full rounded-3xl bg-slate-600 opacity-25' />
        </div>
        <div className='z-0 flex flex-col justify-center items-center'>
            <p className='text-3xl pointer-events-none font-medium'>Book your flight with Sky Hopper!</p>
            <p className='text-xl pointer-events-none'>Millions of flights around the world are waiting for you</p>
            <SearchBar />
        </div>
    </div>

  )
}

export default HeroCard