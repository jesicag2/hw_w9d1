import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import ImageOne from './components/ImageOne';
import ImageTwo from './components/ImageTwo';
import ImageThree from './components/ImageThree';

function App() {

  return (
    <div>
      <Header />
      <About />
      <Contact />
      <hr></hr>
      
      <div className="gallery">
        <h2>Image Gallery</h2>
        <div className="gallery-images">
          <ImageOne />
          <ImageTwo />
          <ImageThree />
        </div>
      </div>
    </div>
  )
}

export default App
