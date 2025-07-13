import React from "react";
import "../styles/Landing.css";

export default function Landing({ onNext }) {
  return (
    <div className="landing-wrapper">
      <div className="overlay" />
      <div className="landing-content">
        <h1>🛒 Welcome to ShopSmart</h1>
        <p>Your one-stop destination for smart, stylish, and affordable shopping.</p>
        <div className="icon-row">
          <span>👗</span>
          <span>📱</span>
          <span>🧴</span>
          <span>🍽️</span>
          <span>🎧</span>
        </div>
        <button onClick={onNext} className="get-started-btn">
          Get Started →
        </button>
      </div>
    </div>
  );
}
