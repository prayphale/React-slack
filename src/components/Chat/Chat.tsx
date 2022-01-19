import "./Chat.scss";

import React, { useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { selectChannelName, selectRoomId } from "../../features/appSlice";

import ChatHeaderLeft from "./ChatHeaderLeft";
import ChatInput from "./ChatInput/ChatInput";
import Message from "./Message/Message";
import { db } from "src/firebase";
import { useRef } from "react";
import { useSelector } from "react-redux";

export const ChatContext = React.createContext("");

function Chat() {
  const chatRef = useRef<null | HTMLDivElement>(null);
  const roomId: string = useSelector(selectRoomId);
  const channelName: string = useSelector(selectChannelName);

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

    chatRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [roomId]);

  return (
    <>
      <ChatContext.Provider value={channelName}>
        <div className="Chat__container">
          <div className="Chat__Header">
            <ChatHeaderLeft />
            <div className="Chat__HeaderRight">
              <p>
                <i className="fal fa-info-circle" /> Details
              </p>
            </div>
          </div>

          <div className="Chat__Messages">
            {msgs.length
              ? msgs.map((msg, i) => {
                  const { message, timestamp, user, userImage } = msg;

                  return (
                    <Message
                      key={i}
                      message={message}
                      timestamp={timestamp}
                      user={user}
                      userImage={userImage}
                    />
                  );
                })
              : null}
            <div ref={chatRef} />
          </div>
          <ChatInput ref={chatRef} channelId={roomId} />
        </div>
      </ChatContext.Provider>
    </>
  );
}

export default Chat;
