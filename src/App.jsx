import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddBien from "./pages/addBien/AddBien";
import BienDetails from "./pages/bienDetails/BienDetails";
import BienListing from "./pages/BienListing";
import ClientListing from "./pages/ClientListing";
import AgentListing from "./pages/AgentListing";
import LoginForm from "./pages/login";
import { createStore } from "redux";
import { userReducer } from "./redux/reducer";
import { Provider } from "react-redux";
import store from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./redux/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<LoginForm />} />
              <Route exact path="/lesBiens" element={<BienListing />} />
              <Route path="bienDetails/:bienId" element={<BienDetails />} />
              <Route path="addBien" element={<AddBien />} />
              <Route path="/clients" element={<ClientListing />} />
              <Route path="/agents" element={<AgentListing />} />
              <Route path="/login" element={<LoginForm />} />
            </Routes>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
