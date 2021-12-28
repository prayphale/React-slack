import "./Header.scss";

import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight/HeaderRight";
import HeaderSearch from "./HeaderSearch/HeaderSearch";
import React from "react";

function Header() {
  return (
    <div className="Header__container">
      <HeaderLeft />
      <HeaderSearch />
      <HeaderRight />
    </div>
  );
}

export default Header;
