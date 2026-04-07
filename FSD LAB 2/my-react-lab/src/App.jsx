import React from 'react';
// 1. Import Router components
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// 2. Import our custom components
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    // 3. Wrap the entire application in the Router
    <Router>
      <div>
        {/* The Navbar stays visible on all pages */}
        <Navbar />
        {/* 4. Define the Routes */}
        <Routes>
          {/* When the path is "/", render the Home component */}
          <Route path="/" element={<Home />} />
          
          {/* When the path is "/about", render the About component */}
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
