import React from 'react'
import NavBar from '../components/navBar'
import Footer from '../components/footer'
import SignUpCard from '../components/signupLoginCard'
import { useLocation } from 'react-router-dom'


const RegisterationPage = () => {
  // get the state from the link in navbar 
  let { state } = useLocation();

  // sign up info for admin or client 
  return (
    <div className='flex-row justify-between w-screen h-screen'>
      <NavBar />
      <SignUpCard userType={'client'} selectedOption={state} />  
      <Footer />
    </div>
  )
}

export default RegisterationPage