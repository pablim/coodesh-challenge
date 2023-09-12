import React, { useState } from 'react'
import { Outlet } from "react-router-dom";

import { Navbar, Sidebar } from "../components";
import Template from '../templates/Template';

function TemplatePage() {
    const [visibleSidebar, setVisibleSidebar] = useState(undefined)
  
    return (
        <Template 
            navbar={
                <Navbar visibleSidebar={setVisibleSidebar} />
            }
            sidebar={
                <Sidebar visible={visibleSidebar}/>
            }
            content={
                <div className='d-flex w-100'>
                    <Outlet />
                </div>
            }
        />
    );
}

export default TemplatePage;