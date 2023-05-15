import React from 'react'
import NavBar from '../components/navBar'
import HeroCard from '../components/heroCard'

const HomePage = () => {

  return (
    <div className='flex-row h-screen'>
        <NavBar />
        {/* Search section */}
        <HeroCard />
        {/* <div className='w-screen bg-slate-500 h-[50vh] opacity-25'>
            middle
        </div>
        <div className="w-screen bg-slate-800 h-[10vh] opacity-25">
            footer
        </div> */}
    </div>
  )
}

export default HomePage