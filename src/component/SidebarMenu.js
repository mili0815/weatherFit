import React from "react";
import { Menu, MenuItem } from "./LayoutStyle";
import { useLocation, useNavigate } from "react-router-dom";

const SidebarMenu = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Menu>
      <MenuItem
        active={location.pathname === "weather"}
        onClick={() => navigate("/weather")}
      >
        날씨
      </MenuItem>
      <MenuItem
        active={location.pathname === "/air-quality"}
        onClick={() => navigate("/air-quality")}
      >
        대기질
      </MenuItem>
      <MenuItem
        active={location.pathname === "/outfit"}
        onClick={() => navigate("outfit")}
      >
        오늘의 옷차림
      </MenuItem>
      <MenuItem
        active={location.pathname === "/activities"}
        onClick={() => navigate("/activities")}
      >
        오늘 할 활동
      </MenuItem>
      <MenuItem
        active={location.pathname === "/forecast"}
        onClick={() => navigate("/forecast")}
      >
        습도, 풍속
      </MenuItem>
    </Menu>
  );
};

export default SidebarMenu;
