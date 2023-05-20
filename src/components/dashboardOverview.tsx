import React from 'react'

const DashboardOverview = ({bookings, emptySeats,cancelledSeats,totalRevenue}) => {
  return (
    <div className="flex justify-around mt-8 mx-4 h-[10vh]">
        <div className="flex flex-col items-center bg-white p-4 rounded-xl shadow hover:scale-105 transition-all duration-300 ease-linear cursor-default">
            <div className="text-lg font-bold text-blue-700">{bookings}</div>
            <div className="text-sm">Number of Bookings Today </div>
        </div>
        <div className="flex flex-col items-center bg-white p-4 rounded-xl shadow hover:scale-105 transition-all duration-300 ease-linear cursor-default">
            <div className="text-lg font-bold text-blue-700">
            {emptySeats}
            </div>
            <div className="text-sm">Number of Empty Seats Today </div>
        </div>
        <div className="flex flex-col items-center bg-white p-4 rounded-xl shadow hover:scale-105 transition-all duration-300 ease-linear cursor-default">
            <div className="text-lg font-bold text-blue-700">
            {cancelledSeats}
            </div>
            <div className="text-sm">Bookings cancelled Today </div>
        </div>
        <div className="flex flex-col items-center bg-white p-4 rounded-xl shadow hover:scale-105 transition-all duration-300 ease-linear cursor-default">
            <div className="text-lg font-bold text-blue-700">
            {totalRevenue}
            </div>
            <div className="text-sm">Total Revenue Today </div>
        </div>
    </div>
  )
}

export default DashboardOverview