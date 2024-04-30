import React from 'react';
import { BrowserRouter as Router, Routes, Route , Navigate } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Privacy from './components/Privacy/Privacy';
import Terms from './components/TC/Terms';

function App() {
  return (
    <div>
      <Router>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />   
        <Route path="/about-us" element={<About />} />
        <Route path="/privacy-policy" element={<Privacy />} />     
        <Route path="/terms-conditions" element={<Terms />} />
      </Routes>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
