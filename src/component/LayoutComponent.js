import {
  Wrapper,
  Container,
  Sidebar,
  Content,
  SidebarLogo,
} from "./LayoutStyle";
import React from "react";
import { Outlet } from "react-router-dom";
import SidebarMenu from "./SideBarMenu";
export {
  Wrapper,
  Container,
  Sidebar,
  Content,
  SidebarLogo,
} from "./LayoutStyle";

const LayoutComponent = () => {
  return (
    <Wrapper>
      <Container>
        <Sidebar>
          <SidebarLogo>weatherFit</SidebarLogo>
          <SidebarMenu />
        </Sidebar>
        <Content>
          <Outlet />
        </Content>
      </Container>
    </Wrapper>
  );
};

export default LayoutComponent;
