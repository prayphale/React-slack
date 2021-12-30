import "./Chat.scss";

import ChatHeaderLeft from "./ChatHeaderLeft";
import ChatInput from "./ChatInput/ChatInput";
import React from "react";
import { selectRoomId } from "../../features/appSlice";
import { useSelector } from "react-redux";

function Chat() {
  const roomId = useSelector(selectRoomId);

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
      <ChatInput ChanelId={roomId} />
      {/* <div className="Chat_Input">
          //Channel name

      </div> */}
    </div>
  );
}

export default Chat;
