import React, { Children } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useState } from "react";
import { Outlet } from "react-router-dom";
const Page = ({children}) => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className="grid-container">
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar
        openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}
      />
      
      <Outlet />
    </div>
  );
};

export default Page;
