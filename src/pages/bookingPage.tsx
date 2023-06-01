import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useLottie } from "lottie-react";
import aeroplane from '../assets/lottie/134265-airplane.json'
import flightAttendant from '../assets/lottie/flight-attendant.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';
import FlightDetailsCard from '../components/flightDetailsCard';
import { useNavigate } from "react-router-dom";
import Footer from '../components/footer';
import SeatMap from '../components/seatMap';

const BookingPage = () => {const navigate = useNavigate();
  const flightInfo = useSelector((state:any) => state.flight.flightInfo) 
  const [seats, setSeats] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)
  // console.log('flightInfo : ', flightInfo)
  const planeOptions = {
    animationData: aeroplane,
    loop: false
  };
  const attendant = {
    animationData: flightAttendant,
    loop: false
  };
  const { View :PlaneView } = useLottie(planeOptions);
  const { View :airplaneAttendant} = useLottie(attendant);

  const confirmBookingHandler = () =>{
    setTimeout(() => {
      navigate(`/confirmation/${flightInfo.id}`)  
    }, 200);
  }

  // const seatSelectionHandler = (seatNumber) => {


  return (<>

      <div className='absolute w-screen'>{PlaneView}</div>
      <div className='flex flex-col justify-center items-center w-screen scroll'>
        <FlightDetailsCard flightInfo={flightInfo} />
        <div className='z-10 h-[40vh] w-full flex justify-center items-center'>
          <div className='text-6xl font-medium text-gray-600'>Select your seats</div>
          <div className='w-fit'>{airplaneAttendant}</div>
        </div>
        {/* cabin seat selection  */}
        <SeatMap rows={3} cols={20} />
        {/* <div className='w-screen h-[30vh] bg-gray-300 flex flex-col justify-center items-center z-10'></div> */}
      {/* CARD:  seats selected -> total price -> confirm */}
        <div className='h-[15vh] bg-gray-500 bg-opacity-20 w-1/5 z-10 rounded-xl shadow-md flex flex-col justify-center items-center mb-5'>
          <div className='h-2/6 w-full flex justify-around items-center px-5'>
          <div className=' text-xl text-gray-500 font-medium cursor-default'>Total Price:</div>
          <div className=' text-xl text-gray-700 font-medium cursor-default'>{flightInfo.price} x {seats} = {totalPrice} <span>&#8377;</span></div>
          </div>
          <div onClick={() => confirmBookingHandler()} className='h-4/6 w-full flex justify-center items-center bg-blue-500 hover:bg-blue-600 transition-all ease-linear duration-100 rounded-b-lg active:bg-blue-700 active:scale-95 '> 
            <div className="text-2xl text-white font-medium cursor-default">Confirm Booking</div>
          </div>
        </div>
      </div>
      <Footer />

    </>
  )
}

export default BookingPage

{/* <div className='absolute rotate-90 h-[1300px] w-80 '> 
            <img className=' w-full h-full' src={seatingPlan} alt='seating plan'  />
</div> */}