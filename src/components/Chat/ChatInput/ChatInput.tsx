import "./ChatInput.scss";
import "firebase/compat/firestore";

import React, { useEffect, useState } from "react";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { auth, db } from "src/firebase";
import { useContext, useRef } from "react";

import { ChatContext } from "../Chat";
import ReactDOM from "react-dom";
import { useAuthState } from "react-firebase-hooks/auth";

const ChatInput = React.forwardRef((channelId: any, ref) => {
  const channelName = useContext(ChatContext);
  const inputRef = useRef<null | HTMLInputElement>(null);

  const [input, setInput] = useState("");
  const [user] = useAuthState(auth);

  useEffect(() => {
    inputRef.current?.focus();
  });

  const sendMessage = async (e: any) => {
    e.preventDefault();

    if (!channelId) {
      return false;
    }
    const id = channelId.channelId;
    const collectionsMessage = collection(db, "rooms", id, "messages");

    await addDoc(collectionsMessage, {
      message: input,
      timestamp: Timestamp.fromDate(new Date()),
      user: user?.displayName,
      userImage: user?.photoURL,
    });
    setInput("");
  };

  return ReactDOM.createPortal(
    <>
      <div className="ChatInput__container">
        <form>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`Message #${channelName}`}
            disabled={!channelName}
            aria-required="true"
            aria-label="message"
          />
          <button hidden type="submit" onClick={sendMessage}>
            SEND
          </button>
        </form>
      </div>
    </>,
    document.getElementById("portal-root")!
  );
});

export default ChatInput;
