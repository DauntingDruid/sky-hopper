import React from 'react'
import Footer from '../components/footer'
import SignUpCard from '../components/signupLoginCard'
import { useLocation } from 'react-router-dom'


const RegisterationPage = () => {
  // get the state from the link in navbar 
  let { state } = useLocation();

  return (
    <div className='flex-row justify-between w-screen h-screen'>
      <SignUpCard userType={'client'} selectedOption={state} />  
      <Footer />
    </div>
  )
}

export default RegisterationPage