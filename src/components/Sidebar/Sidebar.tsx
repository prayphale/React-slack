import './Sidebar.scss';

import React from "react";
import SidebarHeader from './SidebarHeader';

function Sidebar() {
    return (
        <div className='Sidebar__container'>
            <SidebarHeader />
        </div>
    );
}

export default Sidebar;