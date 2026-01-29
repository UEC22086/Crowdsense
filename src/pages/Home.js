import { useState } from "react";
import "../styles/Home.css";

function Home() {
  const [zones, setZones] = useState([
    { id: 1, zoneName: "Zone A", density: 80, status: "HIGH" },
    { id: 2, zoneName: "Zone B", density: 40, status: "LOW" },
    { id: 3, zoneName: "Zone C", density: 65, status: "MEDIUM" }
  ]);

  const highestZone =
    zones.length > 0
      ? zones.reduce((a, b) => (a.density > b.density ? a : b))
      : {};

  return (
    <div className="home-container">
      <h1>🏠 Crowd Monitoring Overview</h1>

      <div className="cards-grid">
        <div className="card">
          Total Active Zones<br />
          <b>{zones.length}</b>
        </div>

        <div className="card">
          Highest Density Zone<br />
          <b>{highestZone.zoneName}</b>
        </div>

        <div className="card">
          Area<br />
          <b>{highestZone.zoneName}</b>
        </div>

        <div className="card">
          Last Peak Density<br />
          <b>{highestZone.density}</b>
        </div>
      </div>

      <h3>🚨 Alerts</h3>

      {zones.filter(z => z.status === "HIGH").length === 0 && (
        <p>No high alerts</p>
      )}

      {zones
        .filter(z => z.status === "HIGH")
        .map(zone => (
          <div key={zone.id} className="alert high">
            🔴 High Alert — {zone.zoneName} Density: {zone.density}
          </div>
        ))}
    </div>
  );
}

export default Home;
