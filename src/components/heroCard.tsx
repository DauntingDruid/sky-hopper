import React, { useState } from 'react'
import SearchBar from './searchBar'

const HeroCard = () => {
  
  return (
    <div className='h-[50vh] mt-5 flex justify-center items-center overflow-hidden'>
        {/* bg image */}
        <div className="absolute h-3/6 w-5/6 rounded-3xl bg-slate-200 bg-[url('https://images.unsplash.com/photo-1534994820022-ec2b00d8cd42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1996&q=80')] bg-cover bg-center scale-105 hover:scale-110 transition-all ease-in-out duration-1000">
            <div className='relative w-full h-full rounded-3xl bg-slate-600 opacity-25' />
        </div>
        <div className='z-0 w-9/12 flex h-full flex-col opacity-[85%] '>
            <div className='flex-grow flex flex-col justify-center items-center' >
              <p className='text-3xl font-semibold cursor-default bg-slate-100 bg-opacity-30 rounded-2xl p-4 '>Book your flight with <span className='hover:text-blue-500 transition-all ease-in-out duration-500 cursor-default'>Sky Hopper!</span></p>
              <p className='text-xl font-medium pointer-events-none'>Millions of flights around the world are waiting for you</p>
            </div>
            <SearchBar />
        </div>
    </div>
  )
}

export default HeroCard