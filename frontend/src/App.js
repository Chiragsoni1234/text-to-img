import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GenerateImage from './components/GenerateImage';
import ViewImage from './components/ViewImage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GenerateImage />} />
        <Route path="/view-image/:id" element={<ViewImage />} />
      </Routes>
    </Router>
  );
};

export default App;
