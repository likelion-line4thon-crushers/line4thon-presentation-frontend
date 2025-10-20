import styled from "styled-components";
import playIcon from "../../assets/images/play.svg";


export const Sidebar = styled.div`
  width: 193px;
  height: 1015px;
  flex-shrink: 0;
  border: 1px solid #EAEAEA;
  background: #F5F5F5;
  padding: 32px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const SlideList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const SlideThumb = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 129px;       
  height: 67px;       
  padding: 4px 11px 4px 4px;
  gap: 4px;
  border: ${(p) => (p.$active ? "2px solid #4a90e2" : "1px solid #ddd")};
  border-radius: 4px;
  border: 1px solid #EAEAEA;
  background: ${(p) => (p.$active ? "#303030" : "#FFF")}; 
  cursor: pointer;
  transition: 0.25s ease;

  box-shadow: ${(p) =>
    p.$active ? "0 2px 6px rgba(0,0,0,0.1)" : "none"};

  position: relative; /* 삼각형 위치 기준 */

  &:hover {
    transform: scale(1.02);
  }

  /* 선택된 상태에서 오른쪽 삼각형 유지 */
  ${(p) =>
    p.$active &&
    `
    &::after {
      content: "";
      position: absolute;
      right: -15px;
      top: 50%;
      transform: translateY(-50%);
      width: 12px;
      height: 12px;
      background-image: url(${playIcon});
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
    }
  `}
`;

export const SlideImage = styled.img`
  width: 105px;
  height: 100%;
  object-fit: cover;
  border-radius: 2px;
  border: 1px solid #eee;
  flex-shrink: 0;
`;

export const SlideIndex = styled.div`
  width: 7px;
  height: 14px;
  font-size: 10px;
  font-weight: 600;
  line-height: 14px;
  color: ${(p) => (p.$active ? "#FFF" : "#303030")};
  border-radius: 50%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  transition: 0.2s ease;
  background: transparent;

`;
