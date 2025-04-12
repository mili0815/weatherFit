import styled from "styled-components";
import { Link } from "react-router-dom";
export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow-y: hidden;
  max-width: 1200px;
  background-color: rgb(159, 155, 155);
  margin: 0 auto;
`;
export const Container = styled.div`
  width: 100%;
  max-width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  background-color: transparent;
`;

export const Sidebar = styled.div`
  width: 250px;
  background-color: #e8e6e6;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SidebarLogo = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
`;

export const Menu = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
`;
export const MenuItem = styled(Link)`
  display: block;
  padding: 10px 16px;
  margin: 6px 0;
  font-size: 16px;
  color: black;
  text-decoration: none;
  border-radius: 12px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #e0f0ff;
  }
`;

export const Content = styled.div`
  flex: 1;
  padding: 40px;
  background-color: #fff;
  overflow-y: auto; //세로 스크롤 가능능
`;

export const Title = styled.h2`
  font-size: 22px;
  margin-bottom: 20px;
`;
