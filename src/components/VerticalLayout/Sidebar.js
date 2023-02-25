import React, { Component } from "react";
import SimpleBar from "simplebar-react";
import SidebarContent from "./SidebarContent";

const Sidebar = () => {
  return (
    <React.Fragment>
      <div className="vertical-menu">
        <div data-simplebar className="h-100">
            <SimpleBar style={{ maxHeight: "100%" }}>
              <SidebarContent />
            </SimpleBar>
        </div>
      </div>
    </React.Fragment>
  )
}
export default Sidebar;
