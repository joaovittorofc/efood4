import React from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import Home from './pages/Home';
import StoreProfile from './pages/StoreProfile';

const StoreProfileWrapper = () => {
  const { index } = useParams();
  return <StoreProfile index={Number(index)} />;
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store/:index" element={<StoreProfileWrapper />} />
      </Routes>
    </Router>
  );
};

export default App;
