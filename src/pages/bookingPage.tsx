import React from 'react'
import seatingPlan from '../../public/img/6E_320.png'
import NavBar from '../components/navBar'
import { useSelector } from 'react-redux'
import { useLottie } from "lottie-react";
import aeroplane from '../assets/lottie/134265-airplane.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';
const BookingPage = () => {
  const flightInfo = useSelector((state:any) => state.flight.flightInfo) 
  console.log('flightInfo : ', flightInfo)
  const planeOptions = {
    animationData: aeroplane,
    loop: false
  };
  const { View } = useLottie(planeOptions);

  return (<>

      <NavBar />

      <div className='flex justify-center w-screen h-screen scroll'>
      <div className='absolute w-screen'>       
              {View}
      </div>
        {/* from -animation- to */}
        <div className='h-[30vh] mt-10 container z-10 rounded-lg bg-white bg-opacity-70 py-5'>
            <div className='flex items-center px-8 mb-3'>
              <FontAwesomeIcon icon={faPlaneDeparture} className="mr-2 text-2xl text-blue-300" /> 
              <p>Flight from <span className='text-xl font-medium'>{flightInfo.departureCity}</span> to <span className='text-xl font-medium'>{flightInfo.arrivalCity}</span></p>
            </div>
            <hr />  
        </div>
        {/* Departure -> arrival */}

        {/* cabin seat selection */}

        {/* seats selected -> total price */}
        {/* confirm */}

        




        {/* <img className='' src={seatingPlan} alt='seating plan'  /> */}
      
      </div>

    </>
  )
}

export default BookingPage