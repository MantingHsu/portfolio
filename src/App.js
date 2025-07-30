// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer'; // Import new Footer component
import About from './About';
import Projects from './Projects';
import Resume from './Resume';
import Contact from './Contact';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer /> {/* Add Footer here */}
      </div>
    </Router>
  );
}

export default App;
