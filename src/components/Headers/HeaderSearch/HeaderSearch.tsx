import "./HeaderSearch.scss";

import React from "react";

function HeaderSearch(props) {
  return (
    <>
      <div className="HeaderSearch__container">
        <i className="fas fa-search"></i>
        <input
          className="HeaderSearch__input"
          aria-label="search"
          placeholder="Search"
          onChange={props.searchTermChange}
        />
      </div>
    </>
  );
}

export default HeaderSearch;
