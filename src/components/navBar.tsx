import React from 'react'
import { Link } from "react-router-dom";
const NavBar = () => {
  

  return (
    <div className='flex shadow-xl justify-between bg-white px-10 h-[5vh]'>
        <div className='flex justify-center items-center'>
            <a href='/' className='text-2xl font-bold text-blue-300 hover:scale-110 transition-all ease-in-out duration-300'>Sky Hopper</a>
        </div>
        <div className='flex space-x-5 ml-10 justify-center items-center'>
            {/* T0D0 LINK to registeration page -> pass specific data eg reg/log to open register/login card */}
            <Link className='hover:scale-110 transition-all ease-in-out duration-300 underline' to={{pathname:'/signUpLogin'}} state={{ login: true }}>Sign up</Link>
            <Link className='hover:scale-110 transition-all ease-in-out duration-300' to={{pathname:'/signUpLogin'}} state={{ login: false }}>Login</Link>
        </div>
    </div>
  )
}

export default NavBar