import "./SidebarHeader.scss";

import React from "react";
import { auth } from "src/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function SidebarHeader() {
  const [user] = useAuthState(auth);

  return (
    <>
      <div className="SidebarHeader__container">
        <div className="SidebarHeader__info">
          <h2>Fun Discussion</h2>
          <h3>
            <i className="fas fa-circle" /> {user?.displayName}
          </h3>
        </div>
        <div className="SidebarHeader__pencilIcon">
          <i className="fa fa-pencil fa-xs" />
        </div>
        <div className="Sidebar"></div>
      </div>
    </>
  );
}

export default SidebarHeader;
