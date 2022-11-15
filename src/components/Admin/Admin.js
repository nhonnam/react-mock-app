import SideBar from "./SideBar";
import { ProSidebarProvider } from "react-pro-sidebar";
import "./Admin.scss";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

const Admin = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="admin-container">
      <div className="admin-sidebar">
        <ProSidebarProvider>
          <SideBar collapsed={collapsed} />
        </ProSidebarProvider>
      </div>
      <div className="admin-content">
        <FaBars
          onClick={() => {
            setCollapsed(!collapsed);
          }}
        />
        Content goes here
      </div>
    </div>
  );
};

export default Admin;
