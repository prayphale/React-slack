import './HeaderLeft.scss';

import HeaderAvatar from "./HeaderAvatar";
import React from "react";

function HeaderLeft() {
    return (
        <div className="HeaderLeft__container">
            <HeaderAvatar />
        </div>
    );
}

export default HeaderLeft;