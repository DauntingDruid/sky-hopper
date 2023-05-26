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
                <a href='#' className="flex text-lg hover:text-2xl hover:scale-105 transition-all duration-500 justify-center items-end bg-gray-500 bg-blend-overlay hover:bg-blend-normal rounded-xl row-span-5 bg-center bg-cover bg-no-repeat bg-[url('https://images.unsplash.com/photo-1566404791232-af9fe0ae8f8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1036&q=80')]">
                    <div className='px-2 bg-gray-200 bg-opacity-70 mb-2 rounded-lg '>Berlin</div>
                </a>
                <a href='#' className="flex text-lg hover:text-2xl hover:scale-105 transition-all duration-500 justify-center items-end bg-gray-500 bg-blend-overlay hover:bg-blend-normal rounded-xl row-span-3 bg-center bg-cover bg-no-repeat bg-[url('https://images.unsplash.com/photo-1576018753502-1a55b66cc44a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80')]">
                    <div className='px-2 bg-gray-200 bg-opacity-70 mb-2 rounded-lg '>Colombia</div>
                </a>
                <a href='#' className="flex text-lg hover:text-2xl hover:scale-105 transition-all duration-500 justify-center items-end bg-gray-500 bg-blend-overlay hover:bg-blend-normal rounded-xl row-span-2 bg-center bg-cover bg-no-repeat bg-[url('https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80')]">
                    <div className='px-2 bg-gray-200 bg-opacity-70 mb-2 rounded-lg '>Greece</div>
                </a>
                <a href='#' className="flex text-lg hover:text-2xl hover:scale-105 transition-all duration-500 justify-center items-end bg-gray-500 bg-blend-overlay hover:bg-blend-normal rounded-xl row-span-5 bg-center bg-cover bg-no-repeat bg-[url('https://images.unsplash.com/photo-1620657110850-91fbec86cfa4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80')]">
                    <div className='px-2 bg-gray-200 bg-opacity-70 mb-2 rounded-lg '>Netherlands</div>
                </a>
                <a href='#' className="flex text-lg hover:text-2xl hover:scale-105 transition-all duration-500 justify-center items-end bg-gray-500 bg-blend-overlay hover:bg-blend-normal rounded-xl row-span-2 bg-center bg-cover bg-no-repeat bg-[url('https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')]">
                    <div className='px-2 bg-gray-200 bg-opacity-70 mb-2 rounded-lg '>New york</div>
                </a>
                <a href='#' className="flex text-lg hover:text-2xl hover:scale-105 transition-all duration-500 justify-center items-end bg-gray-500 bg-blend-overlay hover:bg-blend-normal rounded-xl row-span-3 bg-center bg-cover bg-no-repeat bg-[url('https://images.unsplash.com/photo-1570136608985-36fdcec5b7da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1007&q=80')]">
                    <div className='px-2 bg-gray-200 bg-opacity-70 mb-2 rounded-lg '>Spain</div>
                </a>
            </div>
        </div>
  )
}

export default LocationGrid