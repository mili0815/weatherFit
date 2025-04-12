import React from "react";
import styled from "styled-components";
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

//오늘의 날씨 정보
const WeatherInfo = styled.div`
  text-align: center;
  font-size: 18px;
  margin-bottom: 20px;
`;

// 시간별 날씨
const HourlyForevast = styled.div`
  display: flex;
  gap: 10px;
  padding: 10px;
  background-color: #f8f8f8;
  border-radius: 10px;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap; // 한 줄로 표시

  &: -webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scollbar-thumb{
    background-color: #ccc;
    border-radius" 10px;
  }

  &::-webkit-scollbar-track{
    background-color: transparent;
  }
`;

const ForacastItem = styled.div`
  padding: 10px;
  text-align: center;
  background-color: #fff;
  min-width: 80px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
`;

// 주간 날씨
const WeeklyForecast = styled.div`
  margin-top: 30px;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 10px;
`;

const WeeklyItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background: #fff;
  margin-bottom: 10px;
  border-radius: 8px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
`;
const WeatherPage = () => {
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
          <Title>Today Weather</Title>
          <WeatherInfo>
            <p>
              <strong>나의 위치:</strong>오산시
            </p>
            <p>
              <strong>온도:</strong>19°C
            </p>
            <p>
              <strong>최고:</strong>25°C / <string>최저</string>4°C
            </p>
            <p>
              <strong>체감온도:</strong>17°C
            </p>
          </WeatherInfo>

          <h3>시간별 예보</h3>
          <HourlyForevast>
            {[
              "오전 6시",
              "오전 7시",
              "오전 8시",
              "오전 9시",
              "오전 10시",
              "오전 11시",
              "오후 12시",
              "오후 1시",
              "오후 2시",
            ].map((time, idx) => (
              <ForacastItem key={idx}>
                <p>{time}</p>
                <p>18°C</p>
              </ForacastItem>
            ))}
          </HourlyForevast>
          <WeeklyForecast>
            <h3>주간 예보</h3>
            {[
              { day: "월", high: "23°C", low: "12°C" },
              { day: "화", high: "22°C", low: "13°C" },
              { day: "수", high: "20°C", low: "11°C" },
              { day: "목", high: "18°C", low: "10°C" },
              { day: "금", high: "21°C", low: "9°C" },
              { day: "토", high: "24°C", low: "13°C" },
              { day: "일", high: "25°C", low: "14°C" },
            ].map((item, idx) => (
              <WeeklyItem key={idx}>
                <span>{item.day}</span>
                <span>
                  {item.high} / {item.low}
                </span>
              </WeeklyItem>
            ))}
          </WeeklyForecast>
        </Content>
      </Container>
    </Wrapper>
  );
};

export default WeatherPage;
