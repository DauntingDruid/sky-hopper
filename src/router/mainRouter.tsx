import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/homePage';
import RegisterationPage from '../pages/registerationPage';
import React from 'react'
import AdminDashboardPage from '../pages/adminDashboardPage';
import BookingPage from '../pages/bookingPage';
import FlightsPage from '../pages/flightsPage';
import BookingConfirmationPage from '../pages/bookingConfirmationPage';

//useLocation hook data: login,

const MainRouter = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' Component={HomePage} />
            <Route path='/search' Component={FlightsPage} />
            <Route path='/search' Component={BookingPage} />
            <Route path='/search' Component={BookingConfirmationPage} />
            <Route path='/signUpLogin' Component={RegisterationPage} />
            <Route path='/admin' Component={AdminDashboardPage} />
        </Routes>
    </Router>
  )
}

export default MainRouter