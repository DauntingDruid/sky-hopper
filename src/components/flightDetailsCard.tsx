import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import airplaneLoading from '../assets/lottie/airplane-loading-purple.json'
import { useLottie } from 'lottie-react'


const FlightDetailsCard = ({flightInfo}) => { 
  const loading = {
    animationData: airplaneLoading,
    loop: true
  };
  const { View :airplaneLoad} = useLottie(loading);
  return (
    <div className='h-[25vh] mt-10 container z-10 rounded-lg bg-white bg-opacity-70 py-5 shadow-md'>
            <div className='flex h-[10%] items-center px-8 mb-3'>
              <FontAwesomeIcon icon={faPlaneDeparture} className="mr-5 text-2xl text-blue-300" /> 
              <p>Flight from <span className='text-xl font-medium'>{flightInfo.departureCity}</span> to <span className='text-xl font-medium'>{flightInfo.arrivalCity}</span></p>
            </div>
            <hr />
            <div className='w-full h-[90%] flex items-center px-5 '>
                {/* flight icon */}
                <div className=' h-full flex justify-center items-center'>
                  <img src={flightInfo.logo} alt="flight_logo" />
                </div>
                <div className='w-full h-full justify-around flex items-center'>
                  <div className='w-1/3 flex flex-row justify-center items-center'>
                    {/* flight departure timing */}
                    <div className='flex flex-col'>
                      <p className='text-2xl font-medium'>{flightInfo.departureTime}</p>
                      <p className='text-sm font-medium text-gray-500'>{flightInfo.departureCode}</p>
                    </div>
                  </div>  
                  <div className='flex flex-row justify-center items-center'>
                    {/* flight duration */}
                    <div className='flex flex-col justify-center items-center'>
                      <p className='text-2xl font-medium mb-5'>{flightInfo.duration}</p>
                      <p className='text-sm font-medium text-gray-500 mt-2'>Non-stop</p>
                      <div className='absolute z-50'>
                      {airplaneLoad}
                      </div>
                    </div>
                  </div>
                  <div className='w-1/3 flex flex-row justify-center items-center'>
                    {/* flight arrival timing */}
                    <div className='flex flex-col'>
                      <p className='text-2xl font-medium'>{flightInfo.arrivalTime}</p>
                      <p className='text-sm font-medium text-gray-500'>{flightInfo.arrivalCode}</p>
                    </div>
                  </div> 
                </div>
                {/* flight date */}
                {/* flight duration */}
            </div>  
        </div>
  )
}

export default FlightDetailsCard