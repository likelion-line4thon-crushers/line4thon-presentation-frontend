import React, { useState, useEffect } from "react";
import AudiencePanel from "../../components/Audience/AudiencePanel";
import SidebarSlides from "../../components/SidebarSlides";
import {
  PageContainer,
  CenterContainer,
  RightPanelContainer,
} from "./AudienceViewPage.styles";
import PeopleSVG from "../../assets/images/people.svg";
import SlideViewer from "../../components/SlideViewer";
import EmojiPanel from "../../components/Audience/EmojiPanel";

const AudienceViewPage = () => {
  // 임시 슬라이드 데이터
  const [slides] = useState([
    PeopleSVG,
    PeopleSVG,
    PeopleSVG,
    PeopleSVG,
    PeopleSVG,
  ]);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const [stampsBySlide, setStampsBySlide] = useState({});

  const handleSelectEmoji = (emoji) => setSelectedEmoji(emoji);

  const handlePlaceStamp = ({ xPct, yPct }) => {
    if (!selectedEmoji) return;
    setStampsBySlide((prev) => {
      const next = { ...prev };
      const key = String(currentSlide);
      const list = next[key] ? [...next[key]] : [];
      list.push({ xPct, yPct, src: selectedEmoji.selectedIcon });
      next[key] = list;
      return next;
    });
  };

  // 전역 커서 변경은 사용하지 않음: 슬라이드 내부에서만 커서 변경

  return (
    <PageContainer>
      {/* 왼쪽 슬라이드 바 */}
      <SidebarSlides
        slides={slides}
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
      />
      <CenterContainer>
        <SlideViewer
          slides={slides}
          currentSlide={currentSlide}
          cursorImage={selectedEmoji?.selectedIcon}
          stamps={stampsBySlide[String(currentSlide)] || []}
          onPlace={handlePlaceStamp}
        />
        <EmojiPanel
          selectedId={selectedEmoji?.id}
          onSelect={handleSelectEmoji}
        />
      </CenterContainer>
      {/* 오른쪽 AudiencePanel */}
      <RightPanelContainer>
        <AudiencePanel />
      </RightPanelContainer>
    </PageContainer>
  );
};

export default AudienceViewPage;
