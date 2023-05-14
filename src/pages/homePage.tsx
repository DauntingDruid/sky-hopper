import React from 'react'
import NavBar from '../components/navBar'
import SearchBar from '../components/searchBar'

const HomePage = () => {

  return (
    <div className='flex-row h-screen'>
        <NavBar />
        {/* Search section */}
        <SearchBar />
        {/* middle section */}
        <div className='w-screen bg-slate-500 h-[50vh]'>
            middle section
        </div>
        {/* footer */}
        <div className="w-screen bg-slate-800 h-[10vh]">
            footer
        </div>
    </div>
  )
}

export default HomePage