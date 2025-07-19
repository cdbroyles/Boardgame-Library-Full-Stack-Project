import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import GameLibrary from './pages/GameLibrary';
import ViewCheckedOutItems from './pages/ViewCheckedOutItems';
import About from './pages/About';

function App() {

  return (
    <>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/AccountLogin" element={<ViewCheckedOutItems />} />
            <Route path="/GameLibrary" element={<GameLibrary />} />
            <Route path="/About" element={<About />} />
          </Routes>
        </Router>
    </>
  )
}

export default App
