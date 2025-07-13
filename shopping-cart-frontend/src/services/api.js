import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8081",
});

export const registerUser = (user) => API.post("/users", user);
export const loginUser = (user) => API.post("/users/login", user);
export const getItems = () => API.get("/items");
export const addToCart = (token, item_id) =>
  API.post("/carts", { item_id }, { headers: { Authorization: `Bearer ${token}` } });
export const checkout = (token) =>
  API.post("/orders", {}, { headers: { Authorization: `Bearer ${token}` } });
export const getCart = (token) =>
  API.get("/carts", { headers: { Authorization: `Bearer ${token}` } });
export const getOrders = (token) =>
  API.get("/orders", { headers: { Authorization: `Bearer ${token}` } });
