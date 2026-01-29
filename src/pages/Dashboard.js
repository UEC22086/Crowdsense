import React, { useEffect, useState } from "react";
import "../styles/Dashboard.css";

function Dashboard({ mode }) {
  const [zones, setZones] = useState([]);
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    // Mock data (later we connect Appwrite)
    const sampleZones = [
      { id: 1, name: "Zone A", count: 40, density: 45, status: "NORMAL" },
      { id: 2, name: "Zone B", count: 75, density: 80, status: "HIGH" },
      { id: 3, name: "Zone C", count: 55, density: 65, status: "MEDIUM" },
    ];

    setZones(sampleZones);

    const highAlerts = sampleZones.filter((z) => z.status === "HIGH");
    setAlerts(highAlerts);
  }, [mode]);

  const highestZone =
    zones.length > 0
      ? zones.reduce((a, b) => (a.density > b.density ? a : b))
      : {};

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">
        {mode} Crowd Monitoring Dashboard
      </h1>

      {/* Cards */}
      <div className="cards-grid">
        <div className="card">Total Active Zones: {zones.length}</div>
        <div className="card">Highest Density Zone: {highestZone.name}</div>
        <div className="card">Density Value: {highestZone.density}</div>
        <div className="card">Status: {highestZone.status}</div>
      </div>

      {/* Alerts */}
      <h2 className="section-title">Alerts</h2>
      <div className="alerts-section">
        {alerts.length === 0 ? (
          <p>No high alerts</p>
        ) : (
          alerts.map((zone) => (
            <div key={zone.id} className="alert-card high">
              🔴 HIGH ALERT — {zone.name} (Density: {zone.density})
            </div>
          ))
        )}
      </div>

      {/* Graph Section */}
      <h2 className="section-title">Live Crowd Graph</h2>
      <div className="graph-box">
        <p>📊 Crowd Density Graph Placeholder</p>
      </div>

      {/* Zone Table */}
      <h2 className="section-title">Zone Details</h2>
      <table className="zone-table">
        <thead>
          <tr>
            <th>Zone</th>
            <th>Count</th>
            <th>Density</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {zones.map((zone) => (
            <tr key={zone.id}>
              <td>{zone.name}</td>
              <td>{zone.count}</td>
              <td>{zone.density}</td>
              <td>
                <span className={`status ${zone.status.toLowerCase()}`}>
                  {zone.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Mode Specific Section */}
      {mode === "Private" && (
        <div className="mode-box private">
          <h3>Private Mode Logic</h3>
          <p>Entry allowed only if count is less than max capacity.</p>
        </div>
      )}

      {mode === "Public" && (
        <div className="mode-box public">
          <h3>Public Mode Logic</h3>
          <p>Monitoring crowd density and congestion zones.</p>
        </div>
      )}

      {mode === "Emergency" && (
        <div className="mode-box emergency">
          <h3>Emergency Mode Logic</h3>
          <p>Automatic alerts sent to police and medical teams.</p>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
