import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import AccountLogin from './pages/AccountLogin';
import GameLibrary from './pages/GameLibrary';
import ReturnGames from './pages/ReturnGames';

function App() {

  return (
    <>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/AccountLogin" element={<AccountLogin />} />
            <Route path="/GameLibrary" element={<GameLibrary />} />
            <Route path="/Return" element={<ReturnGames />} />
          </Routes>
        </Router>
    </>
  )
}

export default App
