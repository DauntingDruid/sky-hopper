import React, { Suspense, lazy } from 'react'
import { useLocation } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion'
import NavBar from '../components/navBar';
import Loader from '../components/loader';

const Home = lazy(() => import('../pages/homePage'))
const Search = lazy(() => import('../pages/flightsPage'))
const Book = lazy(() => import('../pages/bookingPage'))
const Confirmation = lazy(() => import('../pages/bookingConfirmationPage'))
const SignUpLogin = lazy(() => import('../pages/registerationPage'))
const Admin = lazy(() => import('../pages/adminDashboardPage'))


const AnimatedRoutes = () => {
  


    const location = useLocation();
  return (
    <AnimatePresence>
        <NavBar />
        <Routes location={location} key={location.pathname}>    
                <Route path='/' element={
                  <Suspense fallback={<Loader /> }>
                    <Home />
                  </Suspense>
                  } />
                  <Route path='/search'  element={
                  <Suspense fallback={<Loader /> }>
                    <Search />
                  </Suspense>
                  } />
                  <Route path='/book/:id'  element={
                  <Suspense fallback={<Loader /> }>
                    <Book />
                  </Suspense>
                  } />
                  <Route path='/confirmation/:id'  element={
                  <Suspense fallback={<Loader /> }>
                    <Confirmation />
                  </Suspense>
                  } />
                  <Route path='/signUpLogin'  element={
                  <Suspense fallback={<Loader /> }>
                    <SignUpLogin />
                  </Suspense>
                  } />
                  <Route path='/admin'  element={
                  <Suspense fallback={<Loader /> }>
                    <Admin />
                  </Suspense>
                  } />
        </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes