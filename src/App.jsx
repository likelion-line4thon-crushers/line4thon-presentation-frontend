import React, { useLayoutEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import HeaderBar from "./components/HeaderBar";
import "./styles/global.css";

const BASE_WIDTH = 1920;
const BASE_HEIGHT = 1080;
const HEADER_HEIGHT = 40;

function App() {
  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: HEADER_HEIGHT });

  useLayoutEffect(() => {
    const updateScale = () => {
      const availableHeight = window.innerHeight - HEADER_HEIGHT;
      const scaleX = window.innerWidth / BASE_WIDTH;
      const scaleY = availableHeight / BASE_HEIGHT;

      // 화면 꽉 채움, 비율 유지
      const newScale = Math.max(scaleX, scaleY);

      // 중앙정렬 (가로 기준)
      const offsetX = 0;

      // 위쪽 고정: 헤더 바로 아래에서 시작
      const offsetY = HEADER_HEIGHT;

      setScale(newScale);
      setOffset({ x: offsetX, y: offsetY });
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return (
    <>
      <HeaderBar />
      <div
        className="stage"
        style={{
          transform: `translate(${offset.x}px, ${offset.y}px) scale(${scale})`,
          transformOrigin: "top left", // ✅ 위쪽 기준으로 확대
          width: `${BASE_WIDTH}px`,
          height: `${BASE_HEIGHT}px`,
        }}
      >
        <Outlet />
      </div>
    </>
  );
}

export default App;
