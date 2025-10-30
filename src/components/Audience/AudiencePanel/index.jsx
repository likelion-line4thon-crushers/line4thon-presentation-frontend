import React, { useState } from "react";
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
  QuestionInputContainer,
  QuestionInput,
  SubmitButton,
  LockBanner,
} from "./AudiencePanel.styles";
import GoodSVG from "../../../assets/images/good.svg";
import LockIcon from "../../../assets/images/lock.png";

const AudiencePanel = () => {
  const [questionText, setQuestionText] = useState("");
  const [isInputting, setIsInputting] = useState(false);
  const [isLocked, setIsLocked] = useState(false); // 발표자가 잠금 시 true로 설정

  const handleInputChange = (e) => {
    setQuestionText(e.target.value);
    setIsInputting(e.target.value.length > 0);
  };

  const handleSubmit = () => {
    if (questionText.trim()) {
      console.log("질문 제출:", questionText);
      setQuestionText("");
      setIsInputting(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
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

          {isLocked ? (
            <LockBanner>
              <img src={LockIcon} alt="잠금" width={20} height={20} />
              <span>실시간 질문 기능이 잠겼습니다</span>
            </LockBanner>
          ) : (
            <QuestionInputContainer $isInputting={isInputting}>
              <QuestionInput
                value={questionText}
                onChange={handleInputChange}
                onKeyDown={handleKeyPress}
                placeholder="질문 내용을 작성해 주세요"
                $isInputting={isInputting}
              />
              {isInputting && (
                <SubmitButton onClick={handleSubmit}>
                  <img src={GoodSVG} alt="제출" width={16} height={16} />
                </SubmitButton>
              )}
            </QuestionInputContainer>
          )}
        </QuestionList>

        <Scrollbar />
      </Section>
    </PanelWrapper>
  );
};

export default AudiencePanel;
