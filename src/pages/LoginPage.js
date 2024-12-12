import React, { useState } from "react";
import "./LoginPage.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="login-container">
      <h1>Welcome to ROY</h1>
      <div className="login-form">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
        <div className="login-links">
          <a href="/forgot-password">Forgot Password?</a>
          <a href="/register">Register</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
