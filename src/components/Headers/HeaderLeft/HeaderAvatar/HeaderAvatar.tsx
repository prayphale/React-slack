import './HeaderAvatar.scss';

import React from "react";

function HeaderAvatar() {
  return (
    <div className="HeaderAvatar__container">
      <div className="HeaderAvatar__avatar"><i className="fas fa-user-circle fa-2x" /></div>
      <div className="HeaderAvatar__clockIcon"><i className="far fa-clock"></i></div>
    </div>
  );
}

export default HeaderAvatar;
