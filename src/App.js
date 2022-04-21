import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import Creations from './components/pages/Creations';
import Contact from './components/pages/Contact';

function App() {
  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/our-creations' element={<Creations/>}/>
          <Route path='/contact-us' element={<Contact/>}/>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
