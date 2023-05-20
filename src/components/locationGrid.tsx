import React from 'react'

const LocationGrid = () => {

  return (
        <div className="h-[70vh]">
            <div className='flex w-full px-12 py-4 '>
                <div className="hover:animate-pulse bg-center h-8 w-8 bg-cover bg-no-repeat bg-[url('img/travel.png')] mr-2" />
                <div className='text-2xl cursor-default '>Popular Destinations</div>
            </div>            
            {/* Cards Grid */}
            <div className="w-screen h-[60vh] grid grid-rows-5 grid-flow-col grid-cols-4 gap-4 px-12">

                <a href='#' className="flex text-lg hover:text-2xl hover:scale-105 transition-all duration-500 justify-center items-end bg-gray-500 bg-blend-overlay hover:bg-blend-normal rounded-xl row-span-5 bg-center bg-cover bg-no-repeat bg-[url('img/berlin.jpg')]">
                    <div className='px-2 bg-gray-200 bg-opacity-70 mb-2 rounded-lg '>Berlin</div>
                </a>

                <a href='#' className="flex text-lg hover:text-2xl hover:scale-105 transition-all duration-500 justify-center items-end bg-gray-500 bg-blend-overlay hover:bg-blend-normal rounded-xl row-span-3 bg-center bg-cover bg-no-repeat bg-[url('img/colombia.jpg')]">
                    <div className='px-2 bg-gray-200 bg-opacity-70 mb-2 rounded-lg '>Colombia</div>
                </a>

                <a href='#' className="flex text-lg hover:text-2xl hover:scale-105 transition-all duration-500 justify-center items-end bg-gray-500 bg-blend-overlay hover:bg-blend-normal rounded-xl row-span-2 bg-center bg-cover bg-no-repeat bg-[url('img/greece.jpg')]">
                    <div className='px-2 bg-gray-200 bg-opacity-70 mb-2 rounded-lg '>Greece</div>
                </a>

                <a href='#' className="flex text-lg hover:text-2xl hover:scale-105 transition-all duration-500 justify-center items-end bg-gray-500 bg-blend-overlay hover:bg-blend-normal rounded-xl row-span-5 bg-center bg-cover bg-no-repeat bg-[url('img/netherlands.jpg')]">
                    <div className='px-2 bg-gray-200 bg-opacity-70 mb-2 rounded-lg '>Netherlands</div>
                </a>

                <a href='#' className="flex text-lg hover:text-2xl hover:scale-105 transition-all duration-500 justify-center items-end bg-gray-500 bg-blend-overlay hover:bg-blend-normal rounded-xl row-span-2 bg-center bg-cover bg-no-repeat bg-[url('img/new-york.jpg')]">
                    <div className='px-2 bg-gray-200 bg-opacity-70 mb-2 rounded-lg '>New york</div>
                </a>

                <a href='#' className="flex text-lg hover:text-2xl hover:scale-105 transition-all duration-500 justify-center items-end bg-gray-500 bg-blend-overlay hover:bg-blend-normal rounded-xl row-span-3 bg-center bg-cover bg-no-repeat bg-[url('img/spain.jpg')]">
                    <div className='px-2 bg-gray-200 bg-opacity-70 mb-2 rounded-lg '>Spain</div>
                </a>

            </div>
        </div>
  )
}

export default LocationGrid