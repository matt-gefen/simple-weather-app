import './App.css';
import { useState } from 'react';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';

import Index from './pages/Index/Index'

 
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Index/>} />
      </Routes>
    </div>
  );
}

export default App;
