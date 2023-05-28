import React from 'react'; 
    import { useNavigate } from "react-router-dom";


const FlightCards = ({ flights }) => { 
        const navigate = useNavigate();
    
  return (
    <div className='flex flex-col items-center p-4'>
      <h1 className='text-3xl font-medium mb-8'>Flights</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {flights.map((flight) => (
          <div key={flight.id} className='bg-white rounded-xl shadow-xl p-6 hover:scale-105 transition-all duration-200 ease-linear'>
            <div className='flex items-center justify-between mb-4'>
              <img src={flight.logo} alt={flight.airline} className='w-12 h-12' />
              <p className='text-xl font-medium'>{flight.airline}</p>
              <p className='text-sm'>{flight.duration}</p>
            </div>
            <div className='mb-4'>
              <p className='text-xl font-medium'>{flight.departureTime}</p>
              <p className='text-sm'>{flight.departureCity}</p>
              <p className='text-sm'>{flight.departureCode}</p>
            </div>
            <div className='mb-4'>
              <p className='text-xl font-medium'>{flight.arrivalTime}</p>
              <p className='text-sm'>{flight.arrivalCity}</p>
              <p className='text-sm'>{flight.arrivalCode}</p>
            </div>
            <div>
              <p className='text-xl font-medium'>₹{flight.price}</p>
              <p className='text-sm'>{flight.stops} stops</p>
              <button 
                 onClick={() => navigate(`/book/${flight.id}`)}
              className='bg-blue-200 hover:bg-blue-300 rounded-full px-4 py-2 mt-4 transition-all duration-200 ease-linear active:bg-blue-500 active:animate-none'>
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlightCards;
