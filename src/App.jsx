import React from 'react'
import Navbar from './components/Navbar'
import Landingpage from './components/Landingpage'
import Marqueepage from './components/Marqueepage'
import About from './components/About'
import Eyes from './components/Eyes'
import Featuresproject from './components/Featuresproject'
import Threecards from './components/Threecards'
import Eyeopening from './components/Eyeopening'
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import { useEffect } from 'react';



const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full h-screen text-black  ' >
     <Navbar/>
     <Landingpage/>
     <Marqueepage/>
    <About/>
    <Eyes/>
    <Featuresproject/>
    <Threecards/>
    <Eyeopening/>
    
    </div>
  )
}

export default App
