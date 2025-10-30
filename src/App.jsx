import React from "react";
import { Outlet } from "react-router-dom";
import HeaderBar from "./components/HeaderBar";
import "./styles/global.css";

function App() {
  return (
    <div id="root">
      <HeaderBar />
      <div className="page">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
