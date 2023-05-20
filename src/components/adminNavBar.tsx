import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faClipboardList, faPlane, faUser, faCogs } from '@fortawesome/free-solid-svg-icons';

const AdminNavBar = () => {
    const [active, setActive] = useState('Dashboard');
    const handleClick = (e: any) => {
        console.log(e.target.id);
        setActive(e.target.id);
    }

  return (
    <div className="w-[15vw] flex flex-col items-center bg-white shadow-lg">
        {/* logo */}
        <a href='#' className="flex h-[50px] w-[75px] bg-center bg-cover bg-no-repeat bg-[url('img/skyhopper_logo.png')]">
        </a>
        {/* nav links */}
        <div className="flex mt-5 flex-col space-y-1 justify-center items-center">
            <div onClick={(e) => handleClick(e)} id={'Dashboard'} className={active=='Dashboard'?"flex justify-center items-center w-[150px] h-[50px] hover:bg-blue-200 bg-blue-100 rounded-xl transition-all duration-300 ease-linear ":"flex justify-center items-center w-[150px] h-[50px] hover:bg-blue-100 rounded-xl transition-all duration-300 ease-linear "}>
                <FontAwesomeIcon icon={faChartBar} className="mr-2" />
                <p className="text-sm font-semibold pointer-events-none">Dashboard</p>
            </div>
            <div onClick={(e) => handleClick(e)} id={'Statistics'} className={active=='Statistics'?"flex justify-center items-center w-[150px] h-[50px] hover:bg-blue-200 bg-blue-100 rounded-xl transition-all duration-300 ease-linear ":"flex justify-center items-center w-[150px] h-[50px] hover:bg-blue-100 rounded-xl transition-all duration-300 ease-linear "}>
                <FontAwesomeIcon icon={faClipboardList} className="mr-2" />
                <p className="text-sm font-semibold pointer-events-none">Statistics</p>
            </div>
            <div onClick={(e) => handleClick(e)} id={'Bookings'} className={active=='Bookings'?"flex justify-center items-center w-[150px] h-[50px] hover:bg-blue-200 bg-blue-100 rounded-xl transition-all duration-300 ease-linear ":"flex justify-center items-center w-[150px] h-[50px] hover:bg-blue-100 rounded-xl transition-all duration-300 ease-linear "}>
                <FontAwesomeIcon icon={faPlane} className="mr-2" />
                <p className="text-sm font-semibold pointer-events-none">Bookings</p>
            </div>
            <div onClick={(e) => handleClick(e)} id={'Aircrafts'} className={active=='Aircrafts'?"flex justify-center items-center w-[150px] h-[50px] hover:bg-blue-200 bg-blue-100 rounded-xl transition-all duration-300 ease-linear ":"flex justify-center items-center w-[150px] h-[50px] hover:bg-blue-100 rounded-xl transition-all duration-300 ease-linear "}>
                <FontAwesomeIcon icon={faPlane} className="mr-2" />
                <p className="text-sm font-semibold pointer-events-none">Aircrafts</p>
            </div>
            <div onClick={(e) => handleClick(e)} id={'Users'} className={active=='Users'?"flex justify-center items-center w-[150px] h-[50px] hover:bg-blue-200 bg-blue-100 rounded-xl transition-all duration-300 ease-linear ":"flex justify-center items-center w-[150px] h-[50px] hover:bg-blue-100 rounded-xl transition-all duration-300 ease-linear "}>
                <FontAwesomeIcon icon={faUser} className="mr-2" />
                <p className="text-sm font-semibold pointer-events-none">Users</p>
            </div>
            <div onClick={(e) => handleClick(e)}id={'Settings'}  className={active=='Settings'?"flex justify-center items-center w-[150px] h-[50px] hover:bg-blue-200 bg-blue-100 rounded-xl transition-all duration-300 ease-linear ":"flex justify-center items-center w-[150px] h-[50px] hover:bg-blue-100 rounded-xl transition-all duration-300 ease-linear "}>
                <FontAwesomeIcon icon={faCogs} className="mr-2" />
                <p className="text-sm font-semibold pointer-events-none">Settings</p>
            </div>
            </div>
    </div>
  )
}

export default AdminNavBar