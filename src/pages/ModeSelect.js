import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Dashboard.css";

function ModeSelect() {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <h1>Choose Mode</h1>

      <div className="mode-grid">
        <div className="mode-card" onClick={() => navigate("/private-mode")}>
          <h2>🔒 Private Mode</h2>
          <p>Controlled access areas</p>
        </div>

        <div className="mode-card" onClick={() => navigate("/public-mode")}>
          <h2>🌍 Public Mode</h2>
          <p>Open crowd monitoring</p>
        </div>

        <div className="mode-card" onClick={() => navigate("/emergency-mode")}>
          <h2>🚨 Emergency Mode</h2>
          <p>Critical crowd evacuation</p>
        </div>
      </div>
    </div>
  );
}

export default ModeSelect;
