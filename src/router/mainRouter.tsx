import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/homePage';
import RegisterationPage from '../pages/registerationPage';
import React from 'react'
import AdminDashboardPage from '../pages/adminDashboardPage';

//useLocation hook data: login,

const MainRouter = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' Component={HomePage} />
            <Route path='/signUpLogin' Component={RegisterationPage} />
            <Route path='/admin' Component={AdminDashboardPage} />
        </Routes>
    </Router>
  )
}

export default MainRouter