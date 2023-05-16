import React from 'react'
import NavBar from '../components/navBar'
import Footer from '../components/footer'
import SignUpCard from '../components/signupLoginCard'

const RegisterationPage = () => {
  // sign up info for admin or client 

  return (
    <div className='flex-row justify-between w-screen h-screen'>
      <NavBar />
      <SignUpCard userType={'client'} />  
      <Footer />
    </div>
  )
}

export default RegisterationPage