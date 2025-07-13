import React, { useEffect, useState } from "react";
import {
  getItems,
  addToCart,
  getCart,
  getOrders,
  checkout,
} from "../services/api";
import { toast } from "react-toastify";
import Navbar from "../components/Navbar";
import "../styles/Items.css";

export default function Items({ token }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems()
      .then((res) => setItems(res.data))
      .catch(() => toast.error("Failed to load items."));
  }, []);

  const handleAddToCart = async (itemId) => {
    try {
      await addToCart(token, itemId);
      toast.success("Item added to cart.");
    } catch {
      toast.error("Could not add item.");
    }
  };

  const handleCart = async () => {
    try {
      const res = await getCart(token);
      if (res.data.length === 0) {
        toast.info("Your cart is empty.");
        return;
      }

      toast(
        <div>
          <strong>🧺 Cart:</strong>
          <ul style={{ textAlign: "left", paddingLeft: "20px" }}>
            {res.data.map((item, i) => (
              <li key={i}>
                {item.item_name} – ₹{item.item_price}
              </li>
            ))}
          </ul>
        </div>,
        { autoClose: 5000 }
      );
    } catch {
      toast.error("Could not load cart.");
    }
  };

  const handleOrders = async () => {
    try {
      const res = await getOrders(token);
      if (res.data.length === 0) {
        toast.info("No orders yet.");
        return;
      }

      toast(
        <div>
          <strong>📦 Order History:</strong>
          <ul style={{ textAlign: "left", paddingLeft: "20px" }}>
            {res.data.map((order, i) => (
              <li key={i}>
                {order.item_name} – ₹{order.item_price}
              </li>
            ))}
          </ul>
        </div>,
        { autoClose: 5000 }
      );
    } catch {
      toast.error("Could not load orders.");
    }
  };

  const handleCheckout = async () => {
    try {
      await checkout(token);
      toast.success("Order placed!");
    } catch {
      toast.error("Checkout failed.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    toast.info("Logged out");
    setTimeout(() => window.location.reload(), 500);
  };

  return (
    <div className="shop-container">
      <Navbar
        onCart={handleCart}
        onCheckout={handleCheckout}
        onOrders={handleOrders}
        onLogout={handleLogout}
      />

      <h2 className="shop-title">🛍 Available Products</h2>

      <div className="product-grid">
        {items.map((item) => (
          <div className="product-card" key={item.id}>
            <h4>{item.name}</h4>
            <p>₹{item.price}</p>
            <button onClick={() => handleAddToCart(item.id)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
