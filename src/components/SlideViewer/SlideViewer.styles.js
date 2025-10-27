import styled from "styled-components";

/* 전체 컨테이너 */
export const Main = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 2vh 2vw;
  background: #f7f8fa;
`;

/* 상단 집중 유도 바 */
export const FocusBar = styled.div`
  display: flex;
  align-self: flex-start;
  justify-content: flex-start;
  width: 7vw; /* 135px */
  height: 4.8vh; /* 52px */
  padding: 0 0.8vw;
  margin-bottom: 2.2vh;
`;

/* 상태 표시 */
export const FocusLeft = styled.div`
  color: #5c5c5c;
  font-family: Pretendard;
  font-size: clamp(14px, 1vw, 18px);
  font-weight: 600;
  display: inline-flex;
  padding: 1.2vh 1vw;
  justify-content: center;
  align-items: center;
  border-radius: 5vh;
  border: 0.05vw solid #eaeaea;
  background: #eaeaea;
  gap: 0.3vw;
`;

/* 슬라이드 본문 */
export const SlideBox = styled.div`
  background-color: white;
  border-radius: 0.6vw;
  padding: 2.8vh 1.5vw;
  box-shadow: 0 0.4vh 1vh rgba(0, 0, 0, 0.1);
  max-width: 67.7vw; /* 1300px */
  width: 100%;
  text-align: center;
`;

export const NavButton = styled.button`
  padding: 0.8vh 0.8vw;
  border: 0.05vw solid #ddd;
  border-radius: 0.3vw;
  background: ${(p) => (p.disabled ? "#f5f5f5" : "#fff")};
  cursor: ${(p) => (p.disabled ? "not-allowed" : "pointer")};
`;
