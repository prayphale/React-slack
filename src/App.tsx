import "./App.scss";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Header from "./components/Headers";
import React from "react";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="App__appBody">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Header />} >

              </Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
