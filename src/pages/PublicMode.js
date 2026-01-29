import React, { useState } from "react";
import "../styles/PrivateMode.css";

import Home from "./Home";
import HistoricalData from "./HistoricalData";
import Predictions from "./Predictions";
import Notifications from "./Notifications";
import Contacts from "./Contacts";
import Settings from "./Settings";

function PublicMode() {
  const [activePage, setActivePage] = useState("home");

  const [density, setDensity] = useState(40);
  const [flowSpeed, setFlowSpeed] = useState(60);

  const riskLevel =
    density > 70 && flowSpeed < 40
      ? "HIGH"
      : density > 50
      ? "MEDIUM"
      : "LOW";

  const renderPage = () => {
    switch (activePage) {
      case "home":
        return <Home />;
      case "history":
        return <HistoricalData />;
      case "predictions":
        return <Predictions />;
      case "notifications":
        return <Notifications />;
      case "contacts":
        return <Contacts />;
      case "settings":
        return <Settings />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="private-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>🌍 Public Mode</h2>
        <ul>
          <li onClick={() => setActivePage("home")}>🏠 Home</li>
          <li onClick={() => setActivePage("history")}>📊 Historical Data</li>
          <li onClick={() => setActivePage("predictions")}>🔮 Predictions</li>
          <li onClick={() => setActivePage("notifications")}>🔔 Notifications</li>
          <li onClick={() => setActivePage("contacts")}>📞 Contacts</li>
          <li onClick={() => setActivePage("settings")}>⚙ Settings</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <h1>Public Crowd Monitoring Dashboard</h1>
        <p>Streets, Festivals, Stations, Grounds</p>

        {/* Risk Control Panel */}
        <div className="public-card">
          <h3>Crowd Density: {density}</h3>
          <input
            type="range"
            min="0"
            max="100"
            value={density}
            onChange={(e) => setDensity(Number(e.target.value))}
          />

          <h3>Movement Speed: {flowSpeed}</h3>
          <input
            type="range"
            min="0"
            max="100"
            value={flowSpeed}
            onChange={(e) => setFlowSpeed(Number(e.target.value))}
          />

          <h3>
            Risk Level:{" "}
            <span className={`risk ${riskLevel.toLowerCase()}`}>
              {riskLevel}
            </span>
          </h3>

          <div className="info-box">
            {riskLevel === "HIGH" && (
              <p>🚨 High risk detected! Crowd congestion critical.</p>
            )}
            {riskLevel === "MEDIUM" && (
              <p>⚠ Crowd density approaching unsafe limits.</p>
            )}
            {riskLevel === "LOW" && (
              <p>✅ Crowd flow is normal.</p>
            )}
          </div>
        </div>

        {/* Dashboard Pages */}
        <div className="dashboard-section">
          {renderPage()}
        </div>
      </div>
    </div>
  );
}

export default PublicMode;
