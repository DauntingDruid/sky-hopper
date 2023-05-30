import { useLottie } from 'lottie-react';
import passportLottie from '../assets/lottie/passport.json';
import React from 'react'
import NavBar from '../components/navBar';

const BookingConfirmationPage = () => {

  const passportAnimation = {
    animationData: passportLottie,
    loop: false
  };
  const { View :passport} = useLottie(passportAnimation);

  return (
    <>
      <NavBar />
      <div className='flex flex-col justify-between items-center h-screen w-screen'>
        <div className='absolute z-0'>
          {passport}
        </div>
        <div className='h-full w-full flex flex-col justify-between items-center z-10'>
          <div className='h-1/3 flex flex-col justify-center items-center xs:px-4 text-4xl text-gray-600 '>
            <p>Your flight is booked and confirmed! </p> 
            <p>We can't wait to serve you on board. Bon voyage!</p>
          </div>
          <div className='h-1/3 flex flex-col justify-center items-center xs:px-4 text-4xl text-gray-600 '>
            <button className='w-fit h-fit p-3 rounded-3xl bg-blue-300 hover:bg-blue-400 active:bg-blue-500 transition-all duration-200 ease-in-out hover:scale-105 active:scale-95 '>Continue exploring</button> 
          </div>
        </div>
      </div>
    </>
  )
}

export default BookingConfirmationPage