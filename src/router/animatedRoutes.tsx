import React from 'react'
import { useLocation } from 'react-router-dom';
import HomePage from '../pages/homePage';
import RegisterationPage from '../pages/registerationPage';
import AdminDashboardPage from '../pages/adminDashboardPage';
import BookingPage from '../pages/bookingPage';
import FlightsPage from '../pages/flightsPage';
import BookingConfirmationPage from '../pages/bookingConfirmationPage';
import { Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion'


const AnimatedRoutes = () => {
    const location = useLocation();
  return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>    
                <Route path='/' Component={HomePage} />
                <Route path='/search' Component={FlightsPage} />
                <Route path='/book/:id' Component={BookingPage} />
                <Route path='/confirmation/:id' Component={BookingConfirmationPage} />
                <Route path='/signUpLogin' Component={RegisterationPage} />
                <Route path='/admin' Component={AdminDashboardPage} />
        </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes