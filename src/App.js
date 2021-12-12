import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  // eslint-disable-next-line

  return (
    <Home path="/" />
  );
}

export default App;