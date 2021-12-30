import './ChatHeaderLeft.scss';

import React from "react";

function ChatHeaderLeft() {
  return (
    <div className='Chat__HeaderLeft'>
      <h4>
        <strong><i className="fal fa-hashtag f292"></i>Room-name</strong>
      </h4>
      <i className="far fa-star" />
    </div>
  );
}

export default ChatHeaderLeft;
