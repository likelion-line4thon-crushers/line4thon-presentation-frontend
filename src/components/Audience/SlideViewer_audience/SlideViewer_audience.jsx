import React, { useRef } from "react";
import {
  Main,
  SlideBox,
  FocusBar,
  FocusLeft,
} from "./SlideViewer_audience.styles";

const SlideViewer = ({
  slides,
  currentSlide,
  cursorImage,
  stamps = [],
  onPlace,
}) => {
  const boxRef = useRef(null);

  const handleClick = (e) => {
    if (!onPlace || !boxRef.current) return;
    const rect = boxRef.current.getBoundingClientRect();
    const xPct = ((e.clientX - rect.left) / rect.width) * 100;
    const yPct = ((e.clientY - rect.top) / rect.height) * 100;
    onPlace({ xPct, yPct });
  };

  return (
    <Main>
      <FocusBar>
        <FocusLeft>
          <span>집중유도맒고 다른걸로 바꿔야함</span>
        </FocusLeft>
      </FocusBar>

      <SlideBox
        ref={boxRef}
        onClick={handleClick}
        style={{
          cursor: cursorImage ? `url(${cursorImage}) 16 16, auto` : "auto",
        }} //마우스 포인터 변경
      >
        <img
          src={slides[currentSlide]}
          alt={`슬라이드 ${currentSlide + 1}`}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            userSelect: "none",
            pointerEvents: "none",
            display: "block",
          }}
        />
        {stamps.map((stamp, idx) => (
          <img
            key={`${stamp.xPct}-${stamp.yPct}-${idx}`}
            src={stamp.src}
            alt="stamp"
            style={{
              position: "absolute",
              top: `${stamp.yPct}%`,
              left: `${stamp.xPct}%`,
              transform: "translate(-50%, -50%)",
              width: 40,
              height: 40,
              pointerEvents: "none",
            }}
          />
        ))}
      </SlideBox>
    </Main>
  );
};

export default SlideViewer;
