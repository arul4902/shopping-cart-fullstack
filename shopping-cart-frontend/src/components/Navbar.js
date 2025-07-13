import React from "react";
import "../styles/Navbar.css";

export default function Navbar({ onCart, onCheckout, onOrders, onLogout }) {
  return (
    <nav className="navbar">
      <div className="nav-left">ShopSmart</div>
      <div className="nav-right">
        <button onClick={onCart}>View Cart</button>
        <button onClick={onCheckout}>Checkout</button>
        <button onClick={onOrders}>Orders</button>
        <button onClick={onLogout}>Logout</button>
      </div>
    </nav>
  );
}
