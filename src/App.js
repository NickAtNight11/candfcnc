import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import Creations from './components/pages/Creations';
import Contact from './components/pages/Contact';
import Admin from './components/pages/Admin';
import Login from './components/pages/Login';
import Error from './components/pages/Error';


function App() {

  return (
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/our-creations' element={<Creations />}/>
            <Route path='/contact-us' element={<Contact/>}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/admin' element={
              <ProtectedRoute>
                <Admin/>
              </ProtectedRoute>
            }/>
            <Route path='*' element={<Error/>}/>
          </Routes>
          <Footer />
        </Router>
  );
}

export default App;
