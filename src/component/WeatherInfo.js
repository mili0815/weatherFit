import styled from "styled-components";

const WeatherInfoCard = styled.div`
  background-color: white;
  border-radius: 20px;
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 170px;
  width: 100%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.12);
  }
`;

const CardTitle = styled.h2`
  font-size: 16px;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
const Info = styled.p`
  font-size: 14px;
  color: #555;
  margin: 4px 0;
`;
const WeatherInfo = () => {
  return (
    <WeatherInfoCard>
      <CardTitle>💧풍속 & 습도</CardTitle>
      <Info>습속: 60%</Info>
      <Info>풍속: 15km/h</Info>
    </WeatherInfoCard>
  );
};

export default WeatherInfo;
