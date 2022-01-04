import "./ChatInput.scss";
import "firebase/compat/firestore";

import React, { useState } from "react";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { auth, db } from "src/firebase";

import { ChatContext } from "../Chat";
import { useAuthState } from "react-firebase-hooks/auth";
import { useContext } from "react";

function ChatInput(channelId: any, chatRef: any) {
  const channelName = useContext(ChatContext);
  const [input, setInput] = useState("");
  const [user] = useAuthState(auth);

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

    chatRef?.current?.scrollIntoView({
      behavior: "smooth",
    });

    setInput("");
  };

  return (
    <div className="ChatInput__container">
      <form>
        <input
          type="text"
          value={input}
          aria-required="true"
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message #${channelName}`}
          disabled={!channelName}
          name="message"
        />
        <button hidden type="submit" onClick={sendMessage}>
          SEND
        </button>
      </form>
    </div>
  );
}

export default ChatInput;
