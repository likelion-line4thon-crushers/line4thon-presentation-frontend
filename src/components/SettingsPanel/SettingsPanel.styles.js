import styled from "styled-components";

/* 전체 패널 */
export const PanelWrapper = styled.aside`
  width: 327px;
  height: 1015px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
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
  height: 38px;
  margin: 0;
  padding: 8px 12px;
  font-family: Pretendard;
  font-size: 15px;
  font-weight: 600;
  line-height: 22px;
  color: #303030;
  letter-spacing: -0.3px;
  border-bottom: 1px solid #eaeaea;
  background: #f9f9f9;
  display: flex;
  align-items: center;
`;

/* 청중 수 영역 */
export const AudienceCountWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  gap: 8px;
  color: #5C5C5C;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.4px;
  border-radius: 20px;
  border: 1px solid #EAEAEA;
  background: #FAFAFA;
  margin: 12px;
`;

export const AudienceIcon = styled.img`
  width: 24px;
  height: 24px;
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
  gap: 10px;
  padding: 0 12px 12px;
`;


export const ToggleLabel = styled.div`
  color: #5C5C5C;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.4px;
`;

export const ToggleDescription = styled.p`
  margin: 0;
  color: #838383;
  font-size: 11px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: -0.275px;
`;

/* 토글 박스 */
export const ToggleBox = styled.div`
  border-radius: 20px;
  border: 1px solid #EAEAEA;
  background: #FAFAFA;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 4px;
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
  width: 52px;
  height: 28px;
  margin-top: 30px;
  border-radius: 100px;
  background: #EDEDED;
  position: relative;
  align-self: flex-end; /* 오른쪽 아래 정렬 */
  cursor: pointer;
  outline: none;
  transition: background 0.25s ease;

  &:checked {
    background:#E74D07;
  }

  &::after {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    width: 24px;
    height: 24px;
    background: #fff;
    border-radius: 100px;
    transition: transform 0.25s ease;
  }

  &:checked::after {
    transform: translateX(24px);
  }
`;

/* 단일 토글 중앙 정렬용 */
export const SingleToggleInput = styled(ToggleInput)`
  align-self: center;
  margin-top: 0;
`;

/* 단일 토글 전용 박스 */
export const SingleToggleBox = styled.div`
  border-radius: 20px;
  border: 1px solid #EAEAEA;
  background: #FAFAFA;
  padding: 16px;
  margin: 0 12px 12px;
  display: flex;
  align-items: center; /* 중앙 기준 세로 정렬 */
  justify-content: space-between;
  gap: 4px;
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
  padding: 91px 0 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 16px;
  border-radius: 20px;
  border: 1px solid #EAEAEA;
  background: #FAFAFA;
`;

export const LiveWaitingIcon = styled.img`
  width: 126px;
  height: 126px;
  flex-shrink: 0;
`;

export const LiveDesc = styled.div`
  font-size: 14px;
  color: #555;
  margin: 16px 0;
`;

export const LockIcon = styled.img`
  width: 20px;
  height: 20px;
  aspect-ratio: 1/1;
`;


export const LiveButton = styled.button`
  margin: 8px;
  gap: 6px;
  white-space: nowrap;
  color: #5C5C5C;
  text-align: center;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px; /* 138.462% */
  letter-spacing: -0.325px;

  display: inline-flex;
  padding: 11px 40px;
  justify-content: center;
  align-items: center;
  border-radius: 24.014px;
  border: 2px solid var(--Font-01_White, #FFF);
  background: rgba(247, 247, 251, 0.90);
  box-shadow: 0 8px 12px 0 rgba(0, 0, 0, 0.12);
  backdrop-filter: blur(6.003597736358643px);
`;
