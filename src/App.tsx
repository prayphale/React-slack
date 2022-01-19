import "./App.scss";

import React, { Profiler } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Chat from "./components/Chat";
import Header from "./components/Headers";
import Login from "./components/Login";
import Sidebar from "./components/Sidebar";
import Spinner from "react-spinkit";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <div className="AppLoading">
        <div className="AppLoadingContents">
          <img
            src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg"
            alt=""
          />
          <Spinner name="ball-spin-fade-loader" color="purple" fadeIn="none" />
        </div>
      </div>
    );
  }

  var callbackFn = (
    id: string,
    phase: "mount" | "update",
    actualDuration: number,
    baseDuration: number,
    startTime: number,
    commitTime: number,
    interactions: any
  ) => {
    console.log(id, phase, actualDuration, baseDuration, startTime, startTime, commitTime);
  };

  return (
    <>
      <div className="App">
        <Router>
          {!user ? (
            <Login />
          ) : (
            <>
              <Profiler id="header" onRender={callbackFn}>
                <Header />
              </Profiler>
              <div className="App__appBody">
                <Sidebar />
                <Routes>
                  <Route
                    path="/"
                    element={
                      <Profiler id="chat" onRender={callbackFn}>
                        <Chat />
                      </Profiler>
                    }
                  />
                </Routes>
              </div>
            </>
          )}
        </Router>
      </div>
    </>
  );
}

export default App;
