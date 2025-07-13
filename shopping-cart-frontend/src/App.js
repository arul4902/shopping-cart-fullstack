import React, { useState, useEffect } from "react";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Items from "./pages/Items";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [token, setToken] = useState(null);
  const [view, setView] = useState("landing");

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    if (savedToken) {
      setToken(savedToken);
      setView("items");
    }
  }, []);

  const handleSetToken = (newToken) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
    setView("items");
  };

  return (
    <>
      {view === "landing" && <Landing onNext={() => setView("login")} />}
      {view === "login" && (
        <Login setToken={handleSetToken} onSwitch={() => setView("register")} />
      )}
      {view === "register" && (
        <Register onSwitch={() => setView("login")} />
      )}
      {view === "items" && <Items token={token} />}

      <ToastContainer position="top-center" autoClose={2000} />
    </>
  );
}

export default App;
