import "./ChatHeaderLeft.scss";

import { ChatContext } from "../Chat";
import React from "react";
import { useContext } from "react";

function ChatHeaderLeft() {
  const channelName = useContext(ChatContext);

  return (
    <>
      <div className="Chat__HeaderLeft">
        <h4>
          <strong>
            <i className="fal fa-hashtag f292"></i>
            {channelName}
          </strong>
        </h4>
        <i className="far fa-star" />
      </div>
    </>
  );
}

export default ChatHeaderLeft;
