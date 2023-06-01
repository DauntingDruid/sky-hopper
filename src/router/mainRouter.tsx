import { BrowserRouter as Router } from 'react-router-dom';

import React from 'react'

import NavBar from '../components/navBar';
import AnimatedRoutes from './animatedRoutes';

//useLocation hook data: login,

const MainRouter = () => {
  return (
    <Router>
        <NavBar />
        <AnimatedRoutes />
    </Router>
  )
}

export default MainRouter