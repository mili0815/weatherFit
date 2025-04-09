import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/loginPage";
import Home from "./pages/Home";
import WeatherPage from "./pages/WeatherPage";
import ActivitiesPage from "./pages/ActivitiesPage";
import OutfitPage from "./pages/OutfitPage";
import AirQualityPage from "./pages/AirQualityPage";
import ForecastPage from "./pages/ForecastPage";
import CommunityPage from "./pages/CommunityPage";
import SettingsPage from "./pages/SettingsPage";

function App() {
  return (
    <div className="App">
      <Routes>
        {/*기본 경로 로그인 페이지 */}
        <Route path="/" element={<LoginPage />} />
        {/*로그인 후 이동 페이지*/}
        <Route path="/home" element={<Home />} />
        <Route path="/weather" element={<WeatherPage />} />
        <Route path="/activities" element={<ActivitiesPage />} />
        <Route path="/outfit" element={<OutfitPage />} />
        <Route path="/air-quality" element={<AirQualityPage />} />
        <Route path="/forecast" element={<ForecastPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </div>
  );
}

export default App;
