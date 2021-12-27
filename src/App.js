import "./App.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import React from "react";

function App() {
  return (
    <div className="App">
      <Router>
        <>
          <Routes>
            <Route path="/" exact>
              <h1>This is the homePage </h1>
            </Route>
          </Routes>
        </>
      </Router>
    </div>
  );
}

export default App;
