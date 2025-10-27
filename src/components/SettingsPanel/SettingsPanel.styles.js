/* === PanelStyles.js === */
import styled from "styled-components";

/* 전체 패널 */
export const PanelWrapper = styled.aside`
  width: 17vw; /* 327px */
  height: 94vh; /* 1015px */
  background: #ffffff;
  display: flex;
  flex-direction: column;
  border-radius: 0.6vw;
  box-shadow: 0 0.05vw 0.2vw rgba(0, 0, 0, 0.08);
  overflow-y: auto;
`;

/* 구역 */
export const Section = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0;
`;

/* 상단 제목바 */
export const Title = styled.h2`
  height: 3.5vh; /* 38px */
  margin: 0;
  padding: 0.75vh 0.6vw;
  font-family: Pretendard;
  font-size: clamp(12px, 0.8vw, 15px);
  font-weight: 600;
  color: #303030;
  border-bottom: 0.05vw solid #eaeaea;
  background: #f9f9f9;
  display: flex;
  align-items: center;
`;

/* 청중 수 영역 */
export const AudienceCountWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 1.5vh 0.8vw;
  gap: 0.4vw;
  color: #5c5c5c;
  font-family: Pretendard;
  font-size: clamp(13px, 0.9vw, 16px);
  font-weight: 600;
  border-radius: 1vw;
  border: 0.05vw solid #eaeaea;
  background: #fafafa;
  margin: 1vh 0.6vw;
`;

export const AudienceIcon = styled.img`
  width: 1.2vw;
  height: 1.2vw;
  object-fit: contain;
`;

export const AudienceNum = styled.span`
  margin-left: auto;
  font-weight: 600;
  color: #555;
`;

/* 빠른 설정 토글 그리드 */
export const QuickTogglesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.6vw;
  padding: 0 0.6vw 1vh;
`;

export const ToggleLabel = styled.div`
  color: #5c5c5c;
  font-size: clamp(13px, 0.9vw, 16px);
  font-weight: 600;
`;

export const ToggleDescription = styled.p`
  margin: 0;
  color: #838383;
  font-size: clamp(10px, 0.7vw, 12px);
  font-weight: 400;
`;

/* 토글 박스 */
export const ToggleBox = styled.div`
  border-radius: 1vw;
  border: 0.05vw solid #eaeaea;
  background: #fafafa;
  padding: 1.5vh 0.8vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.3vh;
  transition: all 0.2s ease;

  &:hover {
    background: #f5f5f5;
  }

  &:has(input:checked) {
    background: #303030;
    border-color: #303030;
  }

  &:has(input:checked) ${ToggleLabel}, 
  &:has(input:checked) ${ToggleDescription} {
    color: #ffffff;
  }
`;

/* 일반 토글 */
export const ToggleInput = styled.input.attrs({ type: "checkbox" })`
  appearance: none;
  width: 2.7vw; /* 52px */
  height: 2.6vh; /* 28px */
  margin-top: 2.8vh;
  border-radius: 100px;
  background: #ededed;
  position: relative;
  align-self: flex-end;
  cursor: pointer;
  transition: background 0.25s ease;

  &:checked {
    background: #e74d07;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0.2vh;
    left: 0.2vw;
    width: 1.2vw;
    height: 2.2vh;
    background: #fff;
    border-radius: 100px;
    transition: transform 0.25s ease;
  }

  &:checked::after {
    transform: translateX(1.2vw);
  }
`;

export const SingleToggleInput = styled(ToggleInput)`
  align-self: center;
  margin-top: 0;
`;

/* 단일 토글 박스 */
export const SingleToggleBox = styled.div`
  border-radius: 1vw;
  border: 0.05vw solid #eaeaea;
  background: #fafafa;
  padding: 1.5vh 0.8vw;
  margin: 0 0.6vw 1vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.2s ease;

  &:hover {
    background: #f5f5f5;
  }

  .toggle-left {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  &:has(input:checked) {
    background: #303030;
    border-color: #303030;
  }

  &:has(input:checked) ${ToggleLabel}, 
  &:has(input:checked) ${ToggleDescription} {
    color: #ffffff;
  }
`;

/* 라이브 질문 영역 */
export const LiveBox = styled.div`
  flex-shrink: 0;
  padding: 8.5vh 0 3vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1.5vh 0.6vw;
  border-radius: 1vw;
  border: 0.05vw solid #eaeaea;
  background: #fafafa;
`;

export const LiveWaitingIcon = styled.img`
  width: 6.5vw;
  height: 12vh;
`;

export const LiveDesc = styled.div`
  font-size: clamp(12px, 0.8vw, 14px);
  color: #555;
  margin: 1.5vh 0;
`;

export const LockIcon = styled.img`
  width: 1vw;
  height: 1vw;
  aspect-ratio: 1/1;
`;

export const LiveButton = styled.button`
  margin: 0.7vh;
  gap: 0.3vw;
  white-space: nowrap;
  color: #5c5c5c;
  text-align: center;
  font-size: clamp(12px, 0.8vw, 13px);
  font-weight: 600;
  line-height: 1.3;
  display: inline-flex;
  padding: 1vh 2vw;
  justify-content: center;
  align-items: center;
  border-radius: 1.2vw;
  border: 0.1vw solid #fff;
  background: rgba(247, 247, 251, 0.9);
  box-shadow: 0 0.4vh 0.6vh rgba(0, 0, 0, 0.12);
  backdrop-filter: blur(0.5vh);
`;
