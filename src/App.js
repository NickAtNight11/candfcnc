import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import Creations from './components/pages/Creations';
import Contact from './components/pages/Contact';
import Admin from './components/pages/Admin';

import ImageData from './images/image_data.json'

function App() {
  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/our-creations' element={<Creations ImageData={ImageData}/>}/>
          <Route path='/contact-us' element={<Contact/>}/>
          <Route path='/admin' element={<Admin ImageData={ImageData}/>}/>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
