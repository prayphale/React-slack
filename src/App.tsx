import "./App.scss";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Chat from "./components/Chat";
import Header from "./components/Headers";
import React from "react";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="App__appBody">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Chat />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
