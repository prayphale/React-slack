import "./Login.scss";

import { auth, provider } from "src/firebase";

import React from "react";
import { signInWithRedirect } from "firebase/auth";

function Login() {
  const signIn = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    signInWithRedirect(auth, provider).catch((error: { message: any }) =>
      alert(error.message)
    );
  };

  return (
    <div className="Login__container">
      <div className="Login__innerContainer">
        <img
          src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg"
          alt=""
        />
        <h1>Sign in to the Chat Fam</h1>
        <p>chat.slack.com</p>

        <button className="btn btn-success" onClick={signIn}>
          Sign in with Google
        </button>
      </div>
    </div>
  );
}

export default Login;
