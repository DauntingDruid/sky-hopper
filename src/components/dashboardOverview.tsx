import React from 'react'

const DashboardOverview = ({bookings, emptySeats,cancelledSeats,totalRevenue}) => {
  return (
    <div className="flex justify-around mt-8 mx-4 h-[10vh]">
        <div className="flex flex-col items-center bg-white p-4 rounded-xl shadow hover:scale-105 transition-all duration-300 ease-linear cursor-default">
            <div className="text-lg font-bold text-blue-400">{bookings}</div>
            <div className="text-sm text-gray-500">Number of Bookings Today </div>
        </div>
        <div className="flex flex-col items-center bg-white p-4 rounded-xl shadow hover:scale-105 transition-all duration-300 ease-linear cursor-default">
            <div className="text-lg font-bold text-blue-400">
            {emptySeats}
            </div>
            <div className="text-sm text-gray-500">Number of Empty Seats Today </div>
        </div>
        <div className="flex flex-col items-center bg-white p-4 rounded-xl shadow hover:scale-105 transition-all duration-300 ease-linear cursor-default">
            <div className="text-lg font-bold text-blue-400">
            {cancelledSeats}
            </div>
            <div className="text-sm text-gray-500">Bookings cancelled Today </div>
        </div>
        <div className="flex flex-col items-center bg-white p-4 rounded-xl shadow hover:scale-105 transition-all duration-300 ease-linear cursor-default">
            <div className="text-lg font-bold text-blue-400">
            {totalRevenue}
            </div>
            <div className="text-sm text-gray-500">Total Revenue Today </div>
        </div>
    </div>
  )
}

export default DashboardOverview