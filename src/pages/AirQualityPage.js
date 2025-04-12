import React from "react";
import {
  Wrapper,
  Container,
  Sidebar,
  SidebarLogo,
  Menu,
  MenuItem,
  Content,
  Title,
} from "../component/LayoutStyle";
import AirQualityInfo from "../component/AirQualityCard";
import WeatherInfo from "../component/WeatherInfo";
const AirQualityPage = () => {
  return (
    <Wrapper>
      <Container>
        <Sidebar>
          <SidebarLogo>Weather Fit</SidebarLogo>
          <Menu>
            <MenuItem to="/weather">☀️오늘의 날</MenuItem>
            <MenuItem to="/air-quality">🌫 대기질</MenuItem>
            <MenuItem to="/outfit">👕 오늘의 옷차림</MenuItem>
            <MenuItem to="/activities">🚴오늘 할 활동</MenuItem>
          </Menu>
        </Sidebar>

        <Content>
          <Title>🍃대기질 정보</Title>
          <AirQualityInfo />
          <Title>🌬️풍속 & 습도 정보</Title>
          <WeatherInfo />
        </Content>
      </Container>
    </Wrapper>
  );
};

export default AirQualityPage;
