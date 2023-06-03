import React from 'react'
import airplaneLoading from '../assets/lottie/flight-loader.json'
import { useLottie } from 'lottie-react';


const Loader = () => {
    const screenLoading = {
        animationData: airplaneLoading,
        loop: true
      };
      const { View :airplaneLoad} = useLottie(screenLoading);
  return (
    <div className='flex justify-center items-center w-screen h-screen'>
        <div className='w-20 h-20'>
            {airplaneLoad}
        </div>
    </div>
  )
}

export default Loader