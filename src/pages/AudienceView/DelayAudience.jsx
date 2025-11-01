import React from "react";
import SidebarSlides from "../../components/SidebarSlides";
import SlideViewer from "../../components/Audience/SlideViewer_audience/SlideViewer_audience";
import AudiencePanel from "../../components/Audience/AudiencePanel";
import delayImage from "../../assets/images/delay.png";
import {
  PageContainer,
  CenterContainer,
  RightPanelContainer,
} from "./DelayAudience.styles";

const DelayAudience = ({ placeholderCount = 12 }) => {
  return (
    <PageContainer>
      <SidebarSlides isWaiting placeholderCount={placeholderCount} />
      <CenterContainer>
        <SlideViewer
          isWaiting
          waitingImage={delayImage}
          waitingMessage="현재 라이브 대기중입니다."
        />
      </CenterContainer>
      <RightPanelContainer>
        <AudiencePanel isWaiting waitingMessage="세션 대기중입니다." />
      </RightPanelContainer>
    </PageContainer>
  );
};

export default DelayAudience;
