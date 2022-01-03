import "./App.scss";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Chat from "./components/Chat";
import Header from "./components/Headers";
import Login from "./components/Login";
import React from "react";
import Sidebar from "./components/Sidebar";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  const [user, loading] = useAuthState(auth);

  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <div className="App__appBody">
              <Sidebar />
              <Routes>
                <Route path="/" element={<Chat />} />
              </Routes>
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
