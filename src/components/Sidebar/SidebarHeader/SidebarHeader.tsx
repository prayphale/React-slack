import "./SidebarHeader.scss";

import React from "react";

function SidebarHeader() {
  return (
    <div >
      <div className="SidebarHeader">
        <h3>Fun Discussion</h3>
        <h6>
        <i className="fas fa-circle" /> John
        </h6>
      </div>
      <i className="fa fa-pencil" />

      <div className="Sidebar"></div>
    </div>
  );
}

export default SidebarHeader;
