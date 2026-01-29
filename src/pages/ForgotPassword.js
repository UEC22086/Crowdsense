import React, { useState } from "react";
import { account } from "../appwrite/config";
import "../styles/Auth.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleReset = async () => {
    try {
      await account.createRecovery(
        email,
        "http://localhost:3000/reset-password"
      );
      setMessage("Password reset link sent to your email.");
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">Reset Password</h2>

        <input
          type="email"
          placeholder="Enter your registered email"
          className="auth-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button className="auth-btn primary" onClick={handleReset}>
          Send Reset Link
        </button>

        {message && <p className="auth-message">{message}</p>}
      </div>
    </div>
  );
};

export default ForgotPassword;
