import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import RallyDriverWebsite from './components/RallyDriverWebsite';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RallyDriverWebsite />} />
          <Route path="/shop" element={<RallyDriverWebsite />} />
          <Route path="/about" element={<RallyDriverWebsite />} />
          <Route path="/gallery" element={<RallyDriverWebsite />} />
          <Route path="/contact" element={<RallyDriverWebsite />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;