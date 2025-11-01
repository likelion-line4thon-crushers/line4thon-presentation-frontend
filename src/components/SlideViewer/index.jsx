import React from "react";
import {
  Main,
  FocusBar,
  FocusGroupLeft,
  FocusLeft,
  LegendContainer,
  AudienceBar,
  SegmentPrev,
  SegmentCurrent,
  SegmentNext,
  SegmentDefault,
  LegendItem,
  ColorDot,
  FocusRight,
  IconButton,
  TimerButton,
} from "./SlideViewer.styles";

import SlideContainer from "./SlideContainer";
import FocusIcon from "../../assets/images/focus.svg";
import LogoIcon from "../../assets/images/emoji1_black.svg";
import TimerIcon from "../../assets/images/timer.svg";

const SlideViewer = ({
  slides,
  currentSlide = 0,
  audienceStats = { prev: 0, current: 100, next: 0 },
  mode = "live",
}) => {
  const { prev, current, next } = audienceStats;
  const total = Math.max(prev + current + next, 1);
  const prevPct = (prev / total) * 100;
  const currentPct = (current / total) * 100;
  const nextPct = (next / total) * 100;

  return (
    <Main>
      <FocusBar>
        {/* 🔹 왼쪽 그룹 (집중유도 + 검정바) */}
        <FocusGroupLeft>
          <FocusLeft>
            <img src={FocusIcon} alt="집중 유도" width={20} height={20} />
            <span>집중 유도</span>
          </FocusLeft>

          <LegendContainer>
            <AudienceBar>
              {mode === "live" ? (
                <>
                  <SegmentPrev width={prevPct} />
                  <SegmentCurrent width={currentPct} />
                  <SegmentNext width={nextPct} />
                </>
              ) : (
                <SegmentDefault />
              )}
            </AudienceBar>

            <LegendItem>
              <ColorDot color="#C53B2C" />
              이전 구간 슬라이드
            </LegendItem>
            <LegendItem>
              <ColorDot color="#FFFFFF" border />
              현재 슬라이드
            </LegendItem>
            <LegendItem>
              <ColorDot color="#4467FF" />
              다음 구간 슬라이드
            </LegendItem>
          </LegendContainer>
        </FocusGroupLeft>

        {/* 🔹 오른쪽 (로고, 타이머) */}
        <FocusRight>
          <IconButton>
            <img src={LogoIcon} alt="로고" width={24} height={24} />
          </IconButton>
          <TimerButton>
            <img src={TimerIcon} alt="타이머" width={22} height={22} />
            <span>00:00</span>
          </TimerButton>
        </FocusRight>
      </FocusBar>

      {/* 🔹 슬라이드 */}
      <SlideContainer
        src={slides[currentSlide]}
        alt={`슬라이드 ${currentSlide + 1}`}
      />
    </Main>
  );
};

export default SlideViewer;
