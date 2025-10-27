import React, { useState } from "react";
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

  return (
    <PageContainer>
      {/* 왼쪽 슬라이드 바 */}
      <SidebarSlides
        slides={slides}
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
      />
      <CenterContainer>
        <SlideViewer slides={slides} currentSlide={currentSlide} />
        <EmojiPanel />
      </CenterContainer>
      {/* 오른쪽 AudiencePanel */}
      <RightPanelContainer>
        <AudiencePanel />
      </RightPanelContainer>
    </PageContainer>
  );
};

export default AudienceViewPage;
