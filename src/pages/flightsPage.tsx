import React from 'react'
import NavBar from '../components/navBar';
import FlightCards from '../components/flightCards';
import SearchBar from '../components/searchBar';

export const flights = [
  {
    id: 1,
    airline: "Indigo",
    departureCity: "Chennai",
    departureCode: "MAA",
    arrivalCity: "Mumbai",
    arrivalCode: "BOM",
    departureTime: "08:00 AM",
    arrivalTime: "10:00 AM",
    duration: "2h",
    price: 2500,
    stops: 0,
    logo:'https://www.gstatic.com/flights/airline_logos/70px/6E.png'
  },
  {
    id: 2,
    airline: "Air India",
    departureCity: "Chennai",
    departureCode: "MAA",
    arrivalCity: "Mumbai",
    arrivalCode: "BOM",
    departureTime: "10:30 AM",
    arrivalTime: "01:30 PM",
    duration: "3h",
    price: 3000,
    stops: 0,
    logo:'https://www.gstatic.com/flights/airline_logos/70px/AI.png'
  },
  {
    id: 3,
    airline: "SpiceJet",
    departureCity: "Chennai",
    departureCode: "MAA",
    arrivalCity: "Mumbai",
    arrivalCode: "BOM",
    departureTime: "02:00 PM",
    arrivalTime: "05:00 PM",
    duration: "3h",
    price: 2800,
    stops: 0,
    logo:'https://www.gstatic.com/flights/airline_logos/70px/SG.png'
  },
  {
    id: 4,
    airline: "GoAir",
    departureCity: "Chennai",
    departureCode: "MAA",
    arrivalCity: "Mumbai",
    arrivalCode: "BOM",
    departureTime: "06:00 PM",
    arrivalTime: "08:00 PM",
    duration: "2h",
    price: 2700,
    stops: 0,
    logo:'https://www.gstatic.com/flights/airline_logos/70px/G8.png'
  },
  {
    id: 5,
    airline: "Vistara",
    departureCity: "Chennai",
    departureCode: "MAA",
    arrivalCity: "Mumbai",
    arrivalCode: "BOM",
    departureTime: "08:30 PM",
    arrivalTime: "11:30 PM",
    duration: "3h",
    price: 3200,
    stops: 0,
    logo:'https://www.gstatic.com/flights/airline_logos/70px/UK.png'
  },
  {
    id: 6,
    airline: "AirAsia",
    departureCity: "Chennai",
    departureCode: "MAA",
    arrivalCity: "Mumbai",
    arrivalCode: "BOM",
    departureTime: "09:00 AM",
    arrivalTime: "12:00 PM",
    duration: "3h",
    price: 2600,
    stops: 0,
    logo:'https://www.gstatic.com/flights/airline_logos/70px/AK.png'
  },
  {
    id: 7,
    airline: "Air Arabia",
    departureCity: "Chennai",
    departureCode: "MAA",
    arrivalCity: "Mumbai",
    arrivalCode: "BOM",
    departureTime: "11:30 AM",
    arrivalTime: "02:30 PM",
    duration: "3h",
    price: 2300,
    stops: 0,
    logo: 'https://www.gstatic.com/flights/airline_logos/70px/G9.png'
  },
  {
    id: 8,
    airline: "Jet Airways",
    departureCity: "Chennai",
    departureCode: "MAA",
    arrivalCity: "Mumbai",
    arrivalCode: "BOM",
    departureTime: "04:30 PM",
    arrivalTime: "07:30 PM",
    duration: "3h",
    price: 3500,
    stops: 0,
    logo: 'https://www.gstatic.com/flights/airline_logos/70px/J9.png'
  },
  {
    id: 9,
    airline: "Air France",
    departureCity: "Chennai",
    departureCode: "MAA",
    arrivalCity: "Mumbai",
    arrivalCode: "BOM",
    departureTime: "06:30 PM",
    arrivalTime: "09:30 PM",
    duration: "3h",
    price: 3800,
    stops: 0,
    logo: 'https://www.gstatic.com/flights/airline_logos/70px/AF.png'
  },
  {
    id: 10,
    airline: "Emirates",
    departureCity: "Chennai",
    departureCode: "MAA",
    arrivalCity: "Mumbai",
    arrivalCode: "BOM",
    departureTime: "09:30 PM",
    arrivalTime: "12:30 AM",
    duration: "3h",
    price: 4200,
    stops: 0,
    logo: 'https://www.gstatic.com/flights/airline_logos/70px/EK.png'
  },
  {
    id: 11,
    airline: "Qatar Airways",
    departureCity: "Chennai",
    departureCode: "MAA",
    arrivalCity: "Mumbai",
    arrivalCode: "BOM",
    departureTime: "10:00 AM",
    arrivalTime: "01:00 PM",
    duration: "3h",
    price: 4100,
    stops: 0,
    logo: 'https://www.gstatic.com/flights/airline_logos/70px/QR.png'
  },
  {
    id: 12,
    airline: "Etihad Airways",
    departureCity: "Chennai",
    departureCode: "MAA",
    arrivalCity: "Mumbai",
    arrivalCode: "BOM",
    departureTime: "02:30 PM",
    arrivalTime: "05:30 PM",
    duration: "3h",
    price: 3800,
    stops: 0,
    logo: 'https://www.gstatic.com/flights/airline_logos/70px/EY.png'
  },
  {
    id: 13,
    airline: "Lufthansa",
    departureCity: "Chennai",
    departureCode: "MAA",
    arrivalCity: "Mumbai",
    arrivalCode: "BOM",
    departureTime: "06:00 PM",
    arrivalTime: "09:00 PM",
    duration: "3h",
    price: 4200,
    stops: 0,
    logo: 'https://www.gstatic.com/flights/airline_logos/70px/LH.png'
  },
  {
    id: 14,
    airline: "Singapore Airlines",
    departureCity: "Chennai",
    departureCode: "MAA",
    arrivalCity: "Mumbai",
    arrivalCode: "BOM",
    departureTime: "08:30 PM",
    arrivalTime: "11:30 PM",
    duration: "3h",
    price: 4500,
    stops: 0,
    logo: 'https://www.gstatic.com/flights/airline_logos/70px/SQ.png'
  },
  {
    id: 15,
    airline: "Cathay Pacific",
    departureCity: "Chennai",
    departureCode: "MAA",
    arrivalCity: "Mumbai",
    arrivalCode: "BOM",
    departureTime: "09:30 AM",
    arrivalTime: "12:30 PM",
    duration: "3h",
    price: 3900,
    stops: 0,
    logo: 'https://www.gstatic.com/flights/airline_logos/70px/CX.png'
  },
];

const FlightsPage = () => {

  return (
    <>
    <NavBar />
    <div className='flex justify-center items-center w-full p-4 bg-blue-200'>
      <div className='w-5/6'>
        <SearchBar />  
      </div>
    </div>
    <FlightCards flights={flights} />
    </>
  )
}

export default FlightsPage