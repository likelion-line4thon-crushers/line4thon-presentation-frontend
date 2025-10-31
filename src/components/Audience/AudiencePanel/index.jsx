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
  QuestionText,
  Scrollbar,
  QuestionInputContainer,
  QuestionInput,
  SubmitButton,
  LockBanner,
} from "./AudiencePanel.styles";
import GoodSVG from "../../../assets/images/good.svg";
import LockIcon from "../../../assets/images/lock.png";

const defaultQuestions = [
  {
    id: 1,
    slideIndex: 0,
    timestamp: "00:00",
    text: "동해물과 백두산이 마르고 닳도록 동해물과 백두산이 마르고 닳도록",
  },
  {
    id: 2,
    slideIndex: 1,
    timestamp: "00:12",
    text: "질문 예시입니다. 내용을 자유롭게 수정해 주세요.",
  },
  {
    id: 3,
    slideIndex: 2,
    timestamp: "01:03",
    text: "추가 질문 예시입니다. 이 문구는 더미 데이터입니다.",
  },
  {
    id: 4,
    slideIndex: 0,
    timestamp: "01:25",
    text: "동해물과 백두산이 마르고 닳도록 동해물과 백두산이 마르고 닳도록",
  },
];

const AudiencePanel = ({ currentSlide, onSelectSlide, questions }) => {
  const [questionText, setQuestionText] = useState("");
  const [isInputting, setIsInputting] = useState(false);
  const [isLocked, setIsLocked] = useState(false); // 발표자가 잠금 시 true로 설정

  const questionItems =
    questions && questions.length > 0 ? questions : defaultQuestions;

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

  const handleSelectSlide = (slideIndex) => {
    if (typeof onSelectSlide === "function") {
      onSelectSlide(slideIndex);
    }
  };

  return (
    <PanelWrapper>
      <HeaderBox>
        <Title>실시간 질문</Title>
      </HeaderBox>
      <Section>
        <QuestionList>
          {questionItems.map(({ id, slideIndex, timestamp, text }) => (
            <QuestionItem key={id} $active={slideIndex === currentSlide}>
              <HeaderRow>
                <SlideLabel
                  type="button"
                  onClick={() => handleSelectSlide(slideIndex)}
                  $active={slideIndex === currentSlide}
                >
                  슬라이드 {slideIndex + 1}
                </SlideLabel>
                <Timestamp>{timestamp}</Timestamp>
              </HeaderRow>

              <QuestionText>{text}</QuestionText>
            </QuestionItem>
          ))}

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
