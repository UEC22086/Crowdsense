import React, { useState } from "react";
import { account } from "../appwrite/config";
import "../styles/Auth.css";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const urlParams = new URLSearchParams(window.location.search);
  const userId = urlParams.get("userId");
  const secret = urlParams.get("secret");

  const handleReset = async () => {
    try {
      await account.updateRecovery(
        userId,
        secret,
        password,
        password
      );
      setMessage("Password reset successful. You can login now.");
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">Create New Password</h2>

        <input
          type="password"
          placeholder="New password"
          className="auth-input"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="auth-btn primary" onClick={handleReset}>
          Reset Password
        </button>

        {message && <p className="auth-message">{message}</p>}
      </div>
    </div>
  );
};

export default ResetPassword;
