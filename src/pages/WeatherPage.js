import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: #f5f5f5;
`;

const Sidebar = styled.div`
  width: 250px;
  background-color: #e8e6e6;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SidebarLogo = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
`;

const Menu = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
`;
const MenuItem = styled.li`
  padding: 15px;
  cursor: pointer;
  background: $ ${(props) => (props.active ? "#d0cfcf" : "transparent")};
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
  border-radius: 8px;
  margin-bottom: 5px;
  &:hover {
    background: #c6c5c5;
  }
`;

const Content = styled.div`
  flex: 1;
  apdding: 40px;
  background-color: #fff;
  overflow-y: auto; //세로 스크롤 가능능
`;

const Title = styled.h2`
  font-size: 22px;
  margin-bottom: 20px;
`;

//오늘의 날씨 정보
const WeatherInfo = styled.div`
    text-align; center;
    font-size: 18px;
    margin-bottom: 20px;
`;

// 시간별 날씨
const HourlyForevast = styled.div`
    display: flex;
    gap: 10px;
    padding 10px;
    background-color: #f8f8f8;
    border-radius: 10px;
    justify-content: center;
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
  justify-content: sapce-between;
  padding: 10px;
  background: #fff;
  margin-bottom: 10px;
  border-radius: 8px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
`;
const WeatherPage = () => {
  return (
    <Container>
      <Sidebar>
        <SidebarLogo>Weather Fit</SidebarLogo>
        <Menu>
          <MenuItem active>☀️오늘의 날</MenuItem>
          <MenuItem>🌫 대기질</MenuItem>
          <MenuItem>👕 오늘의 옷차림</MenuItem>
          <MenuItem>🚴오늘 할 활동</MenuItem>
          <MenuItem>💧 습도, 풍속</MenuItem>
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
  );
};

export default WeatherPage;
