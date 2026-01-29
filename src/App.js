import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SplashScreen from "./pages/SplashScreen";
import Login from "./pages/Login";
import ModeSelect from "./pages/ModeSelect";
import PrivateMode from "./pages/PrivateMode";
import PublicMode from "./pages/PublicMode";
import EmergencyMode from "./pages/EmergencyMode";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        {/* Splash & Auth */}
        <Route path="/" element={<SplashScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mode-select" element={<ModeSelect />} />
        {/* Mode pages */}
        <Route path="/private-mode" element={<PrivateMode />} />
        <Route path="/public-mode" element={<PublicMode />} />
        <Route path="/emergency-mode" element={<EmergencyMode />} />
        {/* Dashboard with modes */}
        <Route
          path="/dashboard/private"
          element={<Dashboard mode="private" />}
        />
        <Route
          path="/dashboard/public"
          element={<Dashboard mode="public" />}
        />
        <Route
          path="/dashboard/emergency"
          element={<Dashboard mode="emergency" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
