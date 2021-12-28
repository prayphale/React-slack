import "./HeaderSearch.scss";

import React from "react";

function HeaderSearch() {
    return (
           <div className="HeaderSearch__container">
               <i className="fas fa-search"></i>
               <input className="HeaderSearch__input" placeholder="Search" />
           </div>
    );
}

export default HeaderSearch;