import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <Home />
  </React.StrictMode>
);
