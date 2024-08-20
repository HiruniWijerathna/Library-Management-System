import React from 'react';
import Hero from './components/Hero';
import Admin_a from './components/Admin_a';
import User_a from './components/User_a';
import User_b from './components/User_b';
import Settings from './components/Settings'; 
import About from './components/About'; 
import Logout from './components/Logout'; 
import Favourite from './components/Favourite';
import Book from './components/Book';

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/Admin_a" element={<Admin_a />} />
          <Route path="/User_a" element={<User_a />} />
          <Route path="/User_b" element={<User_b />} />
          <Route path="/settings" element={<Settings />} /> 
          <Route path="/about" element={<About />} /> 
          <Route path="/logout" element={<Logout />} /> 
          <Route path="/favourite" element={<Favourite />} /> 
          <Route path="/book/:title" element={<Book />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
