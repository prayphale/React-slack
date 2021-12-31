import "./ChatInput.scss";
import "firebase/compat/firestore";

import React, { useState } from "react";
import { Timestamp, addDoc, collection } from "firebase/firestore";

import { db } from "src/firebase";
import { selectChannelName } from '../../../features/appSlice';
import { useCollection } from "react-firebase-hooks/firestore";
import { useSelector } from 'react-redux';

function ChatInput(ChannelId: any) {
  const [channels, loading, error] = useCollection(collection(db, "rooms"));
  const channelName: string = useSelector(selectChannelName);


  const [input, setInput] = useState("");

  const sendMessage = async (e: any) => {
    e.preventDefault();

    if (!ChannelId) {
      return false;
    }
    const id = ChannelId.ChannelId;
    const collectionsMessage = collection(db, "rooms", id, "messages");

    await addDoc(collectionsMessage, {
      message: input,
      timestamp: Timestamp.fromDate(new Date()),
      user: "John Justice",
      useImage:
        "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/142819271/original/09dafa4104fa6aeca4e62f33326be4933ae7ccac/create-cartoon-profile-picture-abd7.jpg",
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
