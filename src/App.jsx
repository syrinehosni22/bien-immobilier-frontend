import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddBien from './components/addBien/AddBien';
import BienDetails from './components/bienDetails/BienDetails';
import BienListing from './components/listDesBiens/BienListing';

function App() {
  return (
    <div className="App">
        <p>
         Welcome
        </p>
        <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<BienListing />}/>
        <Route exact path="bienDetails" element={<BienDetails />} />
        <Route exact path="addBien" element={<AddBien />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
