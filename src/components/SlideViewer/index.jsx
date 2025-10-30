import React, { useRef } from "react";
import { Main, SlideBox, FocusBar, FocusLeft } from "./SlideViewer.styles";

import FocusIcon from "../../assets/images/focus.svg";

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
          <img src={FocusIcon} alt="집중 유도" width={20} height={20} />
          <span>집중 유도</span>
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
            maxWidth: "100%",
            borderRadius: "8px",
            border: "1px solid #eee",
            userSelect: "none",
            pointerEvents: "none",
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
