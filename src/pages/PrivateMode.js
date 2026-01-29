import React, { useState } from "react";
import "../styles/PrivateMode.css";

import Home from "./Home";
import HistoricalData from "./HistoricalData";
import Predictions from "./Predictions";
import Notifications from "./Notifications";
import Contacts from "./Contacts";
import Settings from "./Settings";

function PrivateMode() {
  const [activePage, setActivePage] = useState("home");

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
        <h2>🔒 Private Mode</h2>
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
        <h1>Private Crowd Monitoring Dashboard</h1>
        {renderPage()}
      </div>
    </div>
  );
}

export default PrivateMode;
