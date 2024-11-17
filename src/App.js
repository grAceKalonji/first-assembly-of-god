import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import ContactUs from "./components/pages/ContactUs";


function App() {
  return (
    <>
    <Router> 
     <Navbar />
      <Routes>
      <Route path="/" exact element={<Home/>} />
      <Route path="/ContactUs" element={<ContactUs/>}/>
      </Routes>
     </Router>
    </>
  );
}

export default App;
