import { BrowserRouter as Router } from 'react-router-dom';

import React, { useEffect, useState } from 'react'

import NavBar from '../components/navBar';
import AnimatedRoutes from './animatedRoutes';
import SplashScreen from '../components/splashScreen';

//useLocation hook data: login,

const MainRouter = () => {
  const [loaded, setLoaded] = useState(true);
  useEffect(() =>{
    setTimeout(() =>{
      setLoaded(false)
    },2000)
  },[])

  return (
    <Router>
        {loaded?
          <SplashScreen />
          :
          <AnimatedRoutes />
        }
    </Router>
  )
}

export default MainRouter