// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import CreatePoll from './components/CreatePoll';
import PollList from './components/PollList';
import PollDetails from './components/PollDetails';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePoll />} />
        <Route path="/polls" element={<PollList />} />
        <Route path="/poll/:id" element={<PollDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;