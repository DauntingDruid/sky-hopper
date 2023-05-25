import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { deleteData } from '../store/slices/authSlice';


const NavBar = () => {
  const dispatch = useDispatch()
  const userInfo = useSelector((state:any) => state.auth.userInfo) 
  const userToken = useSelector((state:any) => state.auth.token)  

  const logOutUser = () => {
    dispatch(deleteData())
  }

  useEffect(() => { 
    if(userInfo === '' && userToken === '' ){
      console.log("empty")
    }else{
      console.log("not empty")
    }
  }, [])

  return (
    <div className='flex shadow-xl justify-between bg-white px-10 h-[5vh]'>
    <div className='flex justify-center items-center'>
      <a href='/' className='text-2xl font-bold text-blue-300 hover:scale-110 transition-all ease-in-out duration-300'>Sky Hopper</a>
    </div>
    <div className='flex space-x-5 ml-10 justify-center items-center'>
      {/* T0D0 LINK to registration page -> pass specific data eg reg/log to open register/login card */}
      {userInfo !== '' ? 
      (
        <div className='flex space-x-2 ml-10 justify-center items-center'>
          <img className="inline-block h-10 w-10 rounded-full hover:ring-2 hover:ring-blue-400 transition-all ease-linear duration-300 " src={`${userInfo?.photoURL}`} alt={`${userInfo?.displayName}`}/>
          <div>
            <div className='cursor-default' >{userInfo?.displayName}</div>
            <div onClick={() => logOutUser()} className='text-xs hover:animate-pulse cursor-pointer' >Logout</div>
          </div>
        </div>
      )  
      : (
        <div className='flex space-x-5 ml-10 justify-center items-center'>
          <Link className='hover:scale-110 transition-all ease-in-out duration-300 underline' to={{ pathname: '/signUpLogin' }} state={{ login: true }}>Sign up</Link>
          <Link className='hover:scale-110 transition-all ease-in-out duration-300' to={{ pathname: '/signUpLogin' }} state={{ login: false }}>Login</Link>
        </div>
      )}
    </div>
  </div>
  )
}

export default NavBar