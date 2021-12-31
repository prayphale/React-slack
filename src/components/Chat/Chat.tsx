import "./Chat.scss";

import React, { useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

import ChatHeaderLeft from "./ChatHeaderLeft";
import ChatInput from "./ChatInput/ChatInput";
import { db } from "src/firebase";
import { selectRoomId } from "../../features/appSlice";
import { useSelector } from "react-redux";

function Chat() {
  const roomId: string = useSelector(selectRoomId);
  const [msgs, setMsgs] = useState([]);

  useEffect(() => {
    if (roomId) {
      const messageRef = collection(db, "rooms", roomId, "messages");

      const q = query(messageRef, orderBy("timestamp", "asc"));

      onSnapshot(q, (querySnapshot) => {
        let msgs: any = [];
        querySnapshot.forEach((doc) => {
          msgs.push(doc.data());
        });
        setMsgs(msgs);
      });
    }
  }, [roomId]);

  return (
    <div className="Chat__container">
      <div className="Chat__Header">
        <ChatHeaderLeft />
        <div className="Chat__HeaderRight">
          <p>
            <i className="fal fa-info-circle" /> Details
          </p>
        </div>
      </div>

      <div className="Chat__Messages">{/* List Out of the message */}</div>
      <ChatInput ChannelId={roomId} />
    </div>
  );
}

export default Chat;
