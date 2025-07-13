// src/pages/Login.js
import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import "../styles/Login.css";

export default function Login({ setToken, onSwitch }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!username || !password) {
      toast.info("Username and password required");
      return;
    }

    try {
      const res = await axios.post("http://localhost:8081/users/login", {
        username,
        password,
      });
      setToken(res.data.token);
      toast.success("Login successful!");
    } catch (err) {
      toast.error("Invalid login");
    }
  };

  return (
    <div className="login-wrapper">
      <form className="login-box" onSubmit={(e) => e.preventDefault()}>
        <h2>🔐 Login</h2>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="login-input"
        />
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
        />
        <button className="login-btn" onClick={handleLogin}>Login</button>
        <p className="login-switch">
          Don't have an account?{" "}
          <button className="switch-btn" onClick={onSwitch}>Register</button>
        </p>
      </form>
    </div>
  );
}
