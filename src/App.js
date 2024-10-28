// src/App.js

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
 import Contact from './components/Contact';
const App = () => {
  return (
    <div>
      <Navbar firstHeading='home(props)' secondHeading='about(props)' companyName='IKA' />
      <Hero />
      <About />
      <Navbar companyName="Giga"/>
      <Contact/>
    </div>
  );
};

export default App;
