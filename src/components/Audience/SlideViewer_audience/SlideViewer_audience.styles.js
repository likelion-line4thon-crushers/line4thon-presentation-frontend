import styled from "styled-components";
import { ToggleInput } from "../../SettingsPanel/SettingsPanel.styles";

/* 전체 컨테이너 */
export const Main = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 2vh 2vw;
  background: #fff;
`;

/* 상단 집중 유도 바 */
export const FocusBar = styled.div`
  display: flex;
  align-self: flex-start;
  justify-content: flex-start;
  gap: 900px;
`;

export const SingleToggleInput = styled(ToggleInput)`
  margin: 0;
`;

/* 슬라이드 본문 */
export const SlideBox = styled.div`
  background-color: white;
  padding: 0;
  width: 65.7vw;
  max-width: 65.7vw;
  aspect-ratio: 210 / 297;
  height: auto;
  max-height: 70vh;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavButton = styled.button`
  padding: 0.8vh 0.8vw;
  border: 0.05vw solid #ddd;
  border-radius: 0.3vw;
  background: ${(p) => (p.disabled ? "#f5f5f5" : "#fff")};
  cursor: ${(p) => (p.disabled ? "not-allowed" : "pointer")};
`;

export const ToggleText = styled.span`
  color: #5c5c5c;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.4px;
`;

export const ReactionButton = styled.button`
  display: inline-flex;
  align-items: flex-end;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const TooltipWrapper = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 8px;
`;

export const Tooltip = styled.div`
  position: absolute;
  right: 40px;
  top: 50%;
  transform: translateY(-50%);
  padding: 6px 12px;
  border-radius: 14px;
  background: rgb(201, 201, 201);

  white-space: nowrap;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.15s ease;

  color: rgb(0, 0, 0);
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.3px;
  margin-right: 7px;

  &::before {
    content: "";
    position: absolute;
    right: -7px;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
    height: 0;

    border-top: 9px solid transparent;
    border-bottom: 9px solid transparent;
    border-left: 9px solid rgb(201, 201, 201);
  }
`;

export const TooltipHoverArea = styled(TooltipWrapper)`
  &:hover ${Tooltip} {
    opacity: 1;
  }
`;
