import React, { useRef, useState } from "react";
import {
  Main,
  SlideBox,
  FocusBar,
  ToggleText,
  ReactionButton,
  TooltipHoverArea,
  Tooltip,
} from "./SlideViewer_audience.styles";
import { SingleToggleInput } from "../../SettingsPanel/SettingsPanel.styles";
import openeyes from "../../../assets/images/openeyes.png";
import closeeyes from "../../../assets/images/closeeyes.png";

const SlideViewer = ({
  slides,
  currentSlide,
  cursorImage,
  stamps = [],
  onPlace,
}) => {
  const boxRef = useRef(null);
  const [isEyesOpen, setIsEyesOpen] = useState(true);

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
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
          <SingleToggleInput defaultChecked />
          <ToggleText>발표자와 함께 보기</ToggleText>
        </div>
        <TooltipHoverArea>
          <Tooltip>리액션 스티커 보이기</Tooltip>
          <ReactionButton onClick={() => setIsEyesOpen((v) => !v)}>
            <img
              src={isEyesOpen ? openeyes : closeeyes}
              alt={isEyesOpen ? "openeyes" : "closeeyes"}
            />
          </ReactionButton>
        </TooltipHoverArea>
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
