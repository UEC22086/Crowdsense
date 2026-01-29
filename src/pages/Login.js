import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { account } from "../appwrite/config";
import "../styles/Auth.css";
import logo from "../assets/logo.png";
import { FcGoogle } from "react-icons/fc";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Email + Password Login
  const handleLogin = async () => {
  try {
    // 🔹 Check if session already exists and delete it
    try {
      await account.get();
      await account.deleteSession("current");
    } catch (e) {
      // no active session, ignore
    }

    // 🔹 Now create new session
    await account.createEmailPasswordSession(email, password);
    navigate("/mode-select");

  } catch (error) {
    console.log("Login error:", error);
    alert(error.message);
  }
};


  // Google OAuth Login
  const handleGoogleLogin = () => {
    account.createOAuth2Session(
      "google",
      "http://localhost:3000/mode-select",
      "http://localhost:3000/login"
    );
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <img src={logo} alt="Crowd Sense AI" className="auth-logo" />

        <h2 className="auth-title">Crowd Sense AI</h2>
        <p className="auth-subtitle">
          Intelligent Crowd Monitoring System
        </p>

        <input
          type="email"
          placeholder="Email"
          className="auth-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="auth-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="auth-btn primary" onClick={handleLogin}>
          Login
        </button>

        <div className="divider">OR</div>

        <button className="google-btn" onClick={handleGoogleLogin}>
          <FcGoogle size={22} />
          <span>Continue with Google</span>
        </button>

        <div className="auth-links">
          <a href="/forgot-password">Forgot Password?</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
