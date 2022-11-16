import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import {
  FaTachometerAlt,
  FaGem,
  FaList,
  FaGithub,
  FaRegLaughWink,
  FaHeart,
} from "react-icons/fa";

import { DiReact } from "react-icons/di";
import { MdDashboard } from "react-icons/md";
import sidebarBg from "../../assets/bg2.jpg";
import { BrowserRouter, Link } from "react-router-dom";

const SideBar = (props) => {
  const { image, collapsed, toggled, handleToggleSidebar } = props;
  return (
    <>
      <Sidebar
        image={sidebarBg}
        collapsed={collapsed}
        toggled={toggled}
        breakPoint="md"
        onToggle={handleToggleSidebar}
      >
        <div
          style={{
            padding: "24px",
            textTransform: "uppercase",
            fontWeight: "bold",
            fontSize: 14,
            letterSpacing: "1px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          <DiReact size={"3em"} color={"00bfff"} />
          Nhon Nam
        </div>
        <Menu iconshape="circle">
          <MenuItem
            routerLink={<Link to="/admins" />}
            icon={<FaTachometerAlt />}
            // suffix={<span className="badge red">New</span>}
          >
            Dashboard
          </MenuItem>
          {/* <MenuItem icon={<FaGem />}> components </MenuItem> */}
        </Menu>
        <Menu iconshape="circle">
          <SubMenu
            // suffix={<span className="badge yellow">3</span>}
            label="Features"
            icon={<FaGem />}
          >
            <MenuItem routerLink={<Link to="/admins/manage-users" />}>
              Quản lý Users
            </MenuItem>
            <MenuItem routerLink={<Link to="/admins/manage-users" />}>
              Quản lý Bài Quiz
            </MenuItem>
            <MenuItem>Quản lý Câu Hỏi</MenuItem>
          </SubMenu>
        </Menu>
      </Sidebar>
    </>
  );
};

export default SideBar;
