import React from "react";
import { Outlet } from "react-router";
import { AppHeader } from "@/widgets/app-header";
import RouteMeta from "./RouteMeta";
import "../styles/global.css";

function App() {
  return (
    <div id="root">
      <RouteMeta />
      <AppHeader />
      <div className="page">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
