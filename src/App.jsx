import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddBien from './components/addBien/AddBien';
import BienDetails from './components/bienDetails/BienDetails';
import BienListing from './components/listDesBiens/BienListing';
import ClientListing from './components/Client/ClientListing';
import AgentListing from './components/Agent/AgentListing/AgentListing';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<BienListing />}/>
        <Route e path="bienDetails/:bienId" element={<BienDetails />} />
        <Route  path="addBien" element={<AddBien />} />
        <Route path="/clients" element={<ClientListing/>}/>
        <Route path="/agents" element={<AgentListing/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
