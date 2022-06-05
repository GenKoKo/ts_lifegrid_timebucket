import React from "react";
import SidebarSelf from "./SidebarSelf";
import SidebarSharing from "./SidebarSharing";

const Sidebar = () => {
  return (
    <div className=" flex  flex-col max-h-full mr-10">
      <SidebarSelf></SidebarSelf>
      <SidebarSharing></SidebarSharing>
    </div>
  );
};

export default Sidebar;
