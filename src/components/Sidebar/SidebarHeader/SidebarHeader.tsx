import "./SidebarHeader.scss";

import React from "react";

function SidebarHeader() {
  return (
    <div className="SidebarHeader__container">
      <div className="SidebarHeader__info">
        <h2>Fun Discussion</h2>
        <h3>
          <i className="fas fa-circle" /> John
        </h3>
      </div>
      <div className="SidebarHeader__pencilIcon">
        <i className="fa fa-pencil fa-xs" />
      </div>
      <div className="Sidebar"></div>
    </div>
  );
}

export default SidebarHeader;
