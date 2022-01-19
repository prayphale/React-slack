import "./Sidebar.scss";

import React from "react";
import SidebarHeader from "./SidebarHeader";
import SidebarOption from "./SidebarOption";

function Sidebar() {
  return (
    <>
      <div className="Sidebar__container">
        <SidebarHeader />
        <SidebarOption />
      </div>
    </>
  );
}

export default Sidebar;
