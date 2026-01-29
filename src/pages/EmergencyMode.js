import React, { useState } from "react";
import "../styles/PrivateMode.css";

import Home from "./Home";
import HistoricalData from "./HistoricalData";
import Predictions from "./Predictions";
import Notifications from "./Notifications";
import Contacts from "./Contacts";
import Settings from "./Settings";

function EmergencyMode() {
  const [activePage, setActivePage] = useState("home");

  const [density, setDensity] = useState(80);
  const [evacSpeed, setEvacSpeed] = useState(30);

  const emergencyLevel =
    density > 70 && evacSpeed < 40
      ? "CRITICAL"
      : density > 50
      ? "WARNING"
      : "STABLE";

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
        <h2>🚨 Emergency Mode</h2>
        <ul>
          <li onClick={() => setActivePage("home")}>🏠 Home</li>
          <li onClick={() => setActivePage("history")}>📊 Historical Data</li>
          <li onClick={() => setActivePage("predictions")}>🔮 Predictions</li>
          <li onClick={() => setActivePage("notifications")}>🔔 Alerts</li>
          <li onClick={() => setActivePage("contacts")}>📞 Emergency Contacts</li>
          <li onClick={() => setActivePage("settings")}>⚙ Settings</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <h1>Emergency Crowd Control Dashboard</h1>
        <p>Disaster zones, stampede prevention, evacuation control</p>

        {/* Emergency Panel */}
        <div className="public-card emergency">
          <h3>Current Crowd Density: {density}</h3>
          <input
            type="range"
            min="0"
            max="100"
            value={density}
            onChange={(e) => setDensity(Number(e.target.value))}
          />

          <h3>Evacuation Speed: {evacSpeed}</h3>
          <input
            type="range"
            min="0"
            max="100"
            value={evacSpeed}
            onChange={(e) => setEvacSpeed(Number(e.target.value))}
          />

          <h3>
            Emergency Status:{" "}
            <span className={`risk ${emergencyLevel.toLowerCase()}`}>
              {emergencyLevel}
            </span>
          </h3>

          <div className="info-box">
            {emergencyLevel === "CRITICAL" && (
              <p>🚨 Immediate evacuation required! High stampede risk.</p>
            )}
            {emergencyLevel === "WARNING" && (
              <p>⚠ Crowd pressure rising. Control movement immediately.</p>
            )}
            {emergencyLevel === "STABLE" && (
              <p>✅ Situation under control.</p>
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

export default EmergencyMode;
