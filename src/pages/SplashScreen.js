// src/pages/SplashScreen.js
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/login");
    }, 3000);
  }, [navigate]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "white",
      }}
    >
      <img src={logo} alt="Crowd Sense AI" width="120" />
      <h2>Crowd Sense AI</h2>
      <p>Intelligent Crowd Monitoring System</p>
    </div>
  );
}

export default SplashScreen;
