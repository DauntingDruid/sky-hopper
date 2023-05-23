import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { deleteData } from '../store/slices/authSlice';


const NavBar = () => {
  const dispatch = useDispatch()
  const userInfo = useSelector((state:any) => state.auth.userInfo) 
  const userToken = useSelector((state:any) => state.auth.token)  

  useEffect(() => { 
    console.log('useEffect')
    if(userInfo === '' && userToken === '' ){
      console.log("empty : ",userInfo,userToken)
    }else{
      console.log("not empty : ",userInfo)
      console.log("not empty : ",userToken)
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
        <>
        <div className={`rounded-full h-10 w-10 bg-slate-100 hover:scale-110 transition-all ease-in-out duration-400`}></div>
        <div className=' cursor-default' >{userInfo?.displayName}</div>
        </>
      )  
      : (
        <>
          <Link className='hover:scale-110 transition-all ease-in-out duration-300 underline' to={{ pathname: '/signUpLogin' }} state={{ login: true }}>Sign up</Link>
          <Link className='hover:scale-110 transition-all ease-in-out duration-300' to={{ pathname: '/signUpLogin' }} state={{ login: false }}>Login</Link>
        </>
      )}
    </div>
  </div>
  )
}

export default NavBar