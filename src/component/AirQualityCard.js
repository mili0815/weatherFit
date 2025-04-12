import React from "react";
import styled from "styled-components";

const Card = styled.div`
  backgournd-color: #f9f9f9;
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.12);
  }
`;

const AQITitle = styled.h2`
  font-size: 22px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const AQIValue = styled.div`
  font-size: 32px;
  font-weight: bold;
  color: ${(props) => {
    if (props.value <= 50) return "#2ecc71";
    if (props.value <= 100) return "#f1c40f";
    if (props.value <= 150) return "#e67e22";
    return "#e74c3c";
  }};
`;

const InfoText = styled.p`
  font-size: 22px;
  color: black;
  font-weight: normal;
  margin-top: 10pxx;
`;

const DetailList = styled.ul`
  margin--top: 20px;
  list-style: none;
  padding: 0;
`;

const DetailItem = styled.li`
  font-size: 16px;
  margin-bottom: 8px;
`;

const AirQualityInfo = () => {
  const aqi = 92;
  const yesterdayAqi = 105;
  const status =
    aqi <= 50 ? "좋음" : aqi <= 100 ? "보통" : aqi <= 150 ? "나쁨" : "매우나쁨";

  let comparisonText = "";
  if (aqi < yesterdayAqi) {
    comparisonText = "더 좋습니다.";
  } else if (aqi > yesterdayAqi) {
    comparisonText = "더 나쁩니다.";
  } else {
    comparisonText = "어제와 같습니다.";
  }

  return (
    <Card>
      <AQITitle>😷 대기질 현황</AQITitle>
      <AQIValue value={aqi}>
        AQI: {aqi} [{status}]
      </AQIValue>

      <InfoText>
        현재 대기질 지수는 {aqi} ({status})로, 어제보다 {comparisonText}
      </InfoText>

      <h3>주요 오염물질</h3>
      <DetailList>
        <DetailItem> 미세먼지 (PM10): 45 µg/m³</DetailItem>
        <DetailItem> 초미세먼지 (PM 5): 31 µg/m³</DetailItem>
        <DetailItem> 오존(O₃): 0.030 ppm</DetailItem>
        <DetailItem> 이산화질소 (NO₂): 0.012 ppm</DetailItem>
      </DetailList>
    </Card>
  );
};

export default AirQualityInfo;
