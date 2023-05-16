import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/homePage';
import RegisterationPage from '../pages/registerationPage';

import React from 'react'

const MainRouter = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' Component={HomePage} />
            <Route path='/signUpLogin' Component={RegisterationPage} />
            {/* <Route path='/contact' Component={ContactPage} /> */}
        </Routes>
    </Router>
  )
}

export default MainRouter