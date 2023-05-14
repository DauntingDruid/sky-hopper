import React from 'react'
import NavBar from '../components/navBar'

const HomePage = () => {

  return (
    <div className='flex-row h-screen'>
        <NavBar />
        {/* Search section */}
        <div className='w-screen bg-slate-200 h-1/6'>
            Search section
        </div>
        {/* middle section */}
        <div className='w-screen bg-slate-500 h-4/6'>
            middle section
        </div>
        {/* footer */}
        <div className="w-screen bg-slate-800 h-24">
            footer
        </div>
    </div>
  )
}

export default HomePage