import React from 'react';

const FlightCards = ({ flights }) => {
  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-3xl font-medium mb-8'>Flights</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {flights.map((flight) => (
          <div key={flight.id} className='bg-white rounded-xl shadow-md p-6'>
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlightCards;
