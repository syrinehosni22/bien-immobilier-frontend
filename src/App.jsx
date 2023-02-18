import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddBien from './pages/addBien/AddBien';
import BienDetails from './pages/bienDetails/BienDetails';
import BienListing from './pages/BienListing';
import ClientListing from './pages/ClientListing';
import AgentListing from './pages/AgentListing/AgentListing';
import LoginForm from './pages/login';
import { createStore } from 'redux';
import {userReducer} from "./redux/reducer"
import { Provider } from 'react-redux'
import store from './redux/store';



function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<BienListing />}/>
            <Route e path="bienDetails/:bienId" element={<BienDetails />} />
            <Route  path="addBien" element={<AddBien />} />
            <Route path="/clients" element={<ClientListing/>}/>
            <Route path="/agents" element={<AgentListing/>}/>
            <Route path="/login" element={<LoginForm/>}/>
      </Routes>
      </BrowserRouter>
    </Provider>
    </div>
  );
}

export default App;
