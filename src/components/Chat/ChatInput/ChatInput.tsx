import "./ChatInput.scss";
import "firebase/compat/firestore";

import React, { useState } from "react";
import { Timestamp, addDoc, collection } from "firebase/firestore";

import { ChatContext } from "../Chat";
import { db } from "src/firebase";
import { useContext } from "react";

function ChatInput(channelId: any, chatRef: any) {
  const channelName = useContext(ChatContext);
  const [input, setInput] = useState("");

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
      user: "John Justice",
      userImage:
        "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/142819271/original/09dafa4104fa6aeca4e62f33326be4933ae7ccac/create-cartoon-profile-picture-abd7.jpg",
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
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message #${channelName}`}
        />
        <button hidden type="submit" onClick={sendMessage}>
          SEND
        </button>
      </form>
    </div>
  );
}

export default ChatInput;
