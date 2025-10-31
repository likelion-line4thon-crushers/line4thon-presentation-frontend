import React, { useState } from "react";
import AudiencePanel from "../../components/Audience/AudiencePanel";
import SidebarSlides from "../../components/SidebarSlides";
import {
  PageContainer,
  CenterContainer,
  RightPanelContainer,
} from "./AudienceViewPage.styles";
import RabbitSVG from "../../assets/images/rabbit.jpg";
import SlideViewer from "../../components/Audience/SlideViewer_audience/SlideViewer_audience";
import EmojiPanel from "../../components/Audience/EmojiPanel";

const AudienceViewPage = () => {
  // 임시 슬라이드 데이터
  const [slides] = useState([
    RabbitSVG,
    RabbitSVG,
    RabbitSVG,
    RabbitSVG,
    RabbitSVG,
  ]);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [followPresenter, setFollowPresenter] = useState(true);
  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const [stampsBySlide, setStampsBySlide] = useState({});
  const [showStamps, setShowStamps] = useState(true);

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

  const handleToggleFollowPresenter = (checked) => {
    setFollowPresenter(checked);
  };

  const handleToggleShowStamps = (nextValue) => {
    setShowStamps(nextValue);
  };

  const handleAudienceSelectSlide = (slideIndex) => {
    setFollowPresenter(false);
    setCurrentSlide(slideIndex);
  };

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
          followPresenter={followPresenter}
          onToggleFollow={handleToggleFollowPresenter}
          showStamps={showStamps}
          onToggleShowStamps={handleToggleShowStamps}
        />
        <EmojiPanel
          selectedId={selectedEmoji?.id}
          onSelect={handleSelectEmoji}
        />
      </CenterContainer>
      {/* 오른쪽 AudiencePanel */}
      <RightPanelContainer>
        <AudiencePanel
          currentSlide={currentSlide}
          onSelectSlide={handleAudienceSelectSlide}
        />
      </RightPanelContainer>
    </PageContainer>
  );
};

export default AudienceViewPage;
