import "./App.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Header from "./components/Headers";
import React from "react";

function App() {
  return (
    <div className="App">
      <Router>
        <>
          <Routes>
            <Route path="/" element={<Header />} />
          </Routes>
        </>
      </Router>
    </div>
  );
}

export default App;
