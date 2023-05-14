import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/homePage';

import React from 'react'

const MainRouter = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' Component={HomePage} />
            {/* <Route path='/about' Component={AboutPage} /> */}
            {/* <Route path='/contact' Component={ContactPage} /> */}
        </Routes>
    </Router>
  )
}

export default MainRouter