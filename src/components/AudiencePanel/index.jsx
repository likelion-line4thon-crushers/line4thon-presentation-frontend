import React from "react";
import {
  PanelWrapper,
  HeaderBox,
  Section,
  Title,
  QuestionList,
  QuestionItem,
  HeaderRow,
  SlideLabel,
  Timestamp,
  QuestionContent,
  QuestionText,
  Scrollbar,
} from "./AudiencePanel.styles";

const AudiencePanel = () => (
  <PanelWrapper>
    <HeaderBox>
      <Title>실시간 질문</Title>
    </HeaderBox>
    <Section>
      <QuestionList>
        <QuestionItem>
          <HeaderRow>
            <SlideLabel>슬라이드 0</SlideLabel>
            <Timestamp>00:00</Timestamp>
          </HeaderRow>

          <QuestionText>
            동해물과 백두산이 마르고 닳도록 동해물과 백두산이 마르고 닳도록
          </QuestionText>
        </QuestionItem>

        <QuestionItem>
          <HeaderRow>
            <SlideLabel>슬라이드 0</SlideLabel>
            <Timestamp>00:00</Timestamp>
          </HeaderRow>

          <QuestionText>
            동해물과 백두산이 마르고 닳도록 동해물과 백두산이 마르고 닳도록
          </QuestionText>
        </QuestionItem>

        <QuestionItem>
          <HeaderRow>
            <SlideLabel>슬라이드 0</SlideLabel>
            <Timestamp>00:00</Timestamp>
          </HeaderRow>

          <QuestionText>
            동해물과 백두산이 마르고 닳도록 동해물과 백두산이 마르고 닳도록
          </QuestionText>
        </QuestionItem>

        <QuestionItem>
          <HeaderRow>
            <SlideLabel>슬라이드 0</SlideLabel>
            <Timestamp>00:00</Timestamp>
          </HeaderRow>

          <QuestionText>
            동해물과 백두산이 마르고 닳도록 동해물과 백두산이 마르고 닳도록
          </QuestionText>
        </QuestionItem>

        <QuestionItem>
          <HeaderRow>
            <SlideLabel>슬라이드 0</SlideLabel>
            <Timestamp>00:00</Timestamp>
          </HeaderRow>

          <QuestionText>
            동해물과 백두산이 마르고 닳도록 동해물과 백두산이 마르고 닳도록
          </QuestionText>
        </QuestionItem>

        <QuestionItem>
          <HeaderRow>
            <SlideLabel>슬라이드 0</SlideLabel>
            <Timestamp>00:00</Timestamp>
          </HeaderRow>
          <QuestionText>
            동해물과 백두산이 마르고 닳도록 동해물과 백두산이 마르고 닳도록
          </QuestionText>
        </QuestionItem>
      </QuestionList>
      <Scrollbar />
    </Section>
  </PanelWrapper>
);

export default AudiencePanel;
