import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faClipboardList, faPlane, faUser, faCogs } from '@fortawesome/free-solid-svg-icons';
import skyHopperLogo from '../assets/img/skyhopper_logo.png';

const AdminNavBar = () => {
    const [active, setActive] = useState('Dashboard');
    const handleClick = (e: any) => {
        console.log(e.target.id);
        setActive(e.target.id);
    }

  return (
    <div className="w-[15vw] flex flex-col items-center bg-white shadow-lg">
        {/* nav links */}
        <div className="flex mt-5 flex-col space-y-1 justify-center items-center">
            <div onClick={(e) => handleClick(e)} id={'Dashboard'} className={active=='Dashboard'?"flex justify-center items-center w-[150px] h-[50px] hover:bg-blue-200 text-blue-400 bg-blue-100 rounded-xl transition-all duration-300 ease-linear ":"flex justify-center items-center w-[150px] h-[50px] hover:bg-blue-100 rounded-xl transition-all duration-300 ease-linear "} >
                <FontAwesomeIcon icon={faChartBar} className={active=='Dashboard'?"mr-2 text-blue-400" :"mr-2 text-gray-500"} />
                <p
                
                className={active=='Dashboard'?"text-sm font-semibold pointer-events-none":"text-sm font-semibold pointer-events-none text-gray-500 " }
                 >Dashboard</p>
            </div>
            <div onClick={(e) => handleClick(e)} id={'Statistics'} className={active=='Statistics'?"flex justify-center items-center w-[150px] h-[50px] hover:bg-blue-200 text-blue-400 bg-blue-100 rounded-xl transition-all duration-300 ease-linear ":"flex justify-center items-center w-[150px] h-[50px] hover:bg-blue-100 rounded-xl transition-all duration-300 ease-linear "} >
                <FontAwesomeIcon icon={faClipboardList} className={active=='Statistics'?"mr-2 text-blue-400" :"mr-2 text-gray-500"} />
                <p
                
                className={active=='Statistics'?"text-sm font-semibold pointer-events-none":"text-sm font-semibold pointer-events-none text-gray-500 " }
                 >Statistics</p>
            </div>
            <div onClick={(e) => handleClick(e)} id={'Bookings'} className={active=='Bookings'?"flex justify-center items-center w-[150px] h-[50px] hover:bg-blue-200 text-blue-400 bg-blue-100 rounded-xl transition-all duration-300 ease-linear ":"flex justify-center items-center w-[150px] h-[50px] hover:bg-blue-100 rounded-xl transition-all duration-300 ease-linear "} >
                <FontAwesomeIcon icon={faPlane} className={active=='Bookings'?"mr-2 text-blue-400" :"mr-2 text-gray-500"} />
                <p
                
                className={active=='Bookings'?"text-sm font-semibold pointer-events-none":"text-sm font-semibold pointer-events-none text-gray-500 " }
                 >Bookings</p>
            </div>
            <div onClick={(e) => handleClick(e)} id={'Aircrafts'} className={active=='Aircrafts'?"flex justify-center items-center w-[150px] h-[50px] hover:bg-blue-200 text-blue-400 bg-blue-100 rounded-xl transition-all duration-300 ease-linear ":"flex justify-center items-center w-[150px] h-[50px] hover:bg-blue-100 rounded-xl transition-all duration-300 ease-linear "} >
                <FontAwesomeIcon icon={faPlane} className={active=='Aircrafts'?"mr-2 text-blue-400" :"mr-2 text-gray-500"} />
                <p
                
                className={active=='Aircrafts'?"text-sm font-semibold pointer-events-none":"text-sm font-semibold pointer-events-none text-gray-500 " }
                 >Aircrafts</p>
            </div>
            <div onClick={(e) => handleClick(e)} id={'Users'} className={active=='Users'?"flex justify-center items-center w-[150px] h-[50px] hover:bg-blue-200 bg-blue-100 text-blue-400 rounded-xl transition-all duration-300 ease-linear ":"flex justify-center items-center w-[150px] h-[50px] hover:bg-blue-100 rounded-xl transition-all duration-300 ease-linear "} >
                <FontAwesomeIcon icon={faUser} className={active=='Users'?"mr-2 text-blue-400" :"mr-2 text-gray-500"} />
                <p
                className={active=='Users'?"text-sm font-semibold pointer-events-none":"text-sm font-semibold pointer-events-none text-gray-500 " }
                 >Users</p>
            </div>
            <div onClick={(e) => handleClick(e)}id={'Settings'}  className={active=='Settings'?"flex justify-center items-center w-[150px] h-[50px] hover:bg-blue-200 text-blue-400 bg-blue-100 rounded-xl transition-all duration-300 ease-linear ":"flex justify-center items-center w-[150px] h-[50px] hover:bg-blue-100 rounded-xl transition-all duration-300 ease-linear "} >
                <FontAwesomeIcon icon={faCogs} className={active=='Settings'?"mr-2 text-blue-400" :"mr-2 text-gray-500"} />
                <p
                
                className={active=='Settings'?"text-sm font-semibold pointer-events-none":"text-sm font-semibold pointer-events-none text-gray-500 " }
                 >Settings</p>
            </div>
            </div>
    </div>
  )
}

export default AdminNavBar