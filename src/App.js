import React from 'react';
import { BrowserRouter as Router, Routes, Route , Navigate } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Privacy from './components/Privacy/Privacy';
import Terms from './components/TC/Terms';
import Benefits from './components/Blogs/Benefits';
import Streamlining from './components/Blogs/Streamlining';
import Contact from './components/Contact/Contact';
import B_main from './components/Blogs/B_main';
import Test from './components/Test';
import ErrorPage from './components/ErrorPage';

function App() {
  return (
    <div>
      <Router>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />   
        <Route path="/about-us" element={<About />} />
        <Route path="/blogs" element={<B_main />} />
        <Route path="/blogs/benefits-of-using-a-cloud-based-salon-crm-software" element={<Benefits />} />
        <Route path="/blogs/streamlining-your-salon-operations-with-swalook-a-comprehensive-guide" element={<Streamlining />} />
        <Route path="/privacy-policy" element={<Privacy />} />     
        <Route path="/terms-conditions" element={<Terms />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/crm" element={<Test />} />
            
      </Routes>
      <Footer/>      
      </Router>
    </div>
  );
}

export default App;
