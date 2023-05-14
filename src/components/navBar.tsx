import React from 'react'

const NavBar = () => {
  return (
    <div className='flex justify-between bg-blue-300 px-10'>
        <div className='flex'>
            <a href='/' className='text-2xl font-bold text-white'>Sky Hopper</a>
        </div>
        <div className='flex space-x-5 ml-10 justify-center items-center'>
            {/* T0D0 LINK to registeration page -> pass specific data eg reg/log to open register/login card */}
            <a href='#' className='text-white'>Register</a>
            <a href='#' className='text-white'>Login</a>
        </div>
    </div>
  )
}

export default NavBar