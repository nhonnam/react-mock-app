import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import {
  FaTachometerAlt,
  FaGem,
  FaList,
  FaGithub,
  FaRegLaughWink,
  FaHeart,
} from "react-icons/fa";
import sidebarBg from "../../assets/bg2.jpg";

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
          Nhon Nam
        </div>
        <Menu iconshape="circle">
          <MenuItem
            icon={<FaTachometerAlt />}
            suffix={<span className="badge red">New</span>}
          >
            dashboard
          </MenuItem>
          <MenuItem icon={<FaGem />}> components </MenuItem>
        </Menu>
        <Menu iconshape="circle">
          <SubMenu
            suffix={<span className="badge yellow">3</span>}
            icon={<FaRegLaughWink />}
          >
            <MenuItem> 1</MenuItem>
            <MenuItem> 2</MenuItem>
            <MenuItem> 3</MenuItem>
          </SubMenu>
        </Menu>
      </Sidebar>
    </>
  );
};

export default SideBar;
