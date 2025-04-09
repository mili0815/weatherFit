import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 250%;
  height: 100vh;
  margin: 0 auto;
  displau: flex;
  flex-derection: column;
  background-color: #f9f9f9;
  box-sizing: border-box;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 40px;
`;

const IntroCard = styled.div`
  background-color: #d3eaff;
  border-radius: 20px;
  padding: 30px;
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const IntroText = styled.p`
  font-size: 20px;
  line-height: 1.6;
  max-width: 70%;
`;

const Logo = styled.img`
  height: 100px;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  graid-gap: 24px;
  width: 100%;
  margin-top: 24px;
`;

const Card = styled.div`
  background: white;
  border-radius: 20px;
  padding: 20px;
  display: flex;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  flex-direction: column;
  justify-content: space-between;
`;

const CardTitle = styled.h2`
  font-size: 18ppx;
  margin-bottom: 10px;
`;

const Button = styled(Link)`
  align-self: flex-end;
  background-color: #007bff;
  color: white;
  padding: 6px 10px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  font-size: 14px;
`;

const Home = () => {
  return (
    <Container>
      <Title>Weather Fit</Title>

      <IntroCard>
        <IntroText>
          <p>
            <strong>Weather Fit</strong>으로, <br />
            날씨에 맞는 옷차림과 활동을추천받고, <br />
            오늘의 날씨를 한눈에 확안하세요!
          </p>
          <Logo src="./logo.jpg" alt="logo" />
        </IntroText>
      </IntroCard>

      <Grid>
        <Card>
          <CardTitle>오늘의 날씨</CardTitle>
          <p>오산시, 19°C</p>
          <Button to="/weather">↗️</Button>
        </Card>

        <Card>
          <CardTitle>추천 활동</CardTitle>
          <p>산책, 자전거</p>
          <Button to="/activities">↗️</Button>
        </Card>

        <Card>
          <CardTitle>오늘의 옷차림 추천</CardTitle>
          <p>22°C - 반팔 + 청바지</p>
          <Button to="/outfit">↗️</Button>
        </Card>

        <Card>
          <CardTitle>미세먼지 & 공기질</CardTitle>
          <p>20 μg/m³, 좋음</p>
          <Button to="/air-quality">↗️</Button>
        </Card>

        <Card>
          <CardTitle>시간별 날씨 예보</CardTitle>
          <p>9:00 - 22°C, 맑음</p>
          <Button>↗️</Button>
        </Card>

        <Card>
          <CardTitle>커뮤니티</CardTitle>
          <p>날씨에 대해 대화해보세요요</p>
          <Button to="/community">↗️</Button>
        </Card>

        <Card>
          <CardTitle>설정 & 내 위치</CardTitle>
          <p>위치를 수정하세요요</p>
          <Button to="/setting">↗️</Button>
        </Card>

        <Card>
          <CardTitle>예보 상세 보기</CardTitle>
          <p>주간 날씨 예보</p>
          <Button to="/forecast">↗️</Button>
        </Card>
      </Grid>
    </Container>
  );
};

export default Home;

// <div className="home-container">
// <h1>Weather Fit</h1>

// <div className="hㄴome-content">
//   <div className="intro-card">
//     <p>
//
//     </p>
//     <img src="/logo.png" alt="WeatherFit logo" className="logo" />
//     <Link to="/weather" className="button">
//       ↗️
//     </Link>
//   </div>

//   <div className="grid">
//     <div className="card">
//       <h2>오늘의 날씨</h2>
//       <p>나의 위치: 오산시</p>
//       <p>19°</p>
//       <Link to="/weather" className="button">
//         ↗️
//       </Link>
//     </div>
//   </div>

//   <div className="card">
//     <h2>추천 활동</h2>
//     <p>산책, 자전거</p>
//     <Link to="/activities" className="button">
//       ↗️
//     </Link>
//   </div>

//   <div className="card">
//     <h2>오늘의 옷차림 추천</h2>
//     <p>22°c * 반팔 + 청바지</p>
//     <Link to="/outfit" className="button">
//       ↗️
//     </Link>
//   </div>

//   <div className="card">
//     <h2>미세먼지 & 공기질</h2>
//     <p>미세먼지: 20µg/m³</p>
//     <p>공기질: 좋음</p>
//     <Link to="/air-quality" className="button">
//       ↗️
//     </Link>
//   </div>

//   <div className="card">
//     <h2>시간별 날씨 예보</h2>
//     <p>9:00 AM - 22°C, 맑음</p>
//     <p>12:00 PM - 24°C, 구름 많음</p>
//     <p>3:00 PM - 23°C, 비비</p>
//     <Link to="/forecast" className="button">
//       ↗️
//     </Link>
//   </div>

//   <div className="card">
//     <h2>커뮤니티</h2>
//     <Link to="/community" className="button">
//       ↗️
//     </Link>
//   </div>

//   <div className="card">
//     <h2>설정 & 내 위치</h2>
//     <Link to="/setting" className="button">
//       ↗️
//     </Link>
//   </div>
// </div>
// </div>
