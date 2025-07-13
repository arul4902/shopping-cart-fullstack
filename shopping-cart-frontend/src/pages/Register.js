import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "../styles/Register.css";

export default function Register({ onSwitch }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    if (!username || !password) {
      toast.warning("All fields required");
      return;
    }

    try {
      await axios.post("http://localhost:8081/users", {
        username,
        password,
      });

      toast.success("Registered successfully!");
      onSwitch(); 
    } catch (err) {
      toast.error(err.response?.data?.error || "Error occurred");
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h2>📝 Sign Up</h2>
        <input
          type="text"
          placeholder="Choose username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="register-input"
        />
        <input
          type="password"
          placeholder="Choose password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="register-input"
        />
        <button onClick={handleRegister} className="register-btn">Register</button>
        <p>
          Already have an account?{" "}
          <button className="link-btn" onClick={onSwitch}>Login</button>
        </p>
      </div>
    </div>
  );
}
