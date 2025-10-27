import styled from "styled-components";

/* 전체 컨테이너 */
export const Main = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 40px;
  background: #fff;
`;

/* 상단 집중 유도 바 */
export const FocusBar = styled.div`
  display: flex;
  align-self: flex-start;
  justify-content: flex-start;
  width: 135px;
  height: 52px;
  padding: 0 16px;
  margin-bottom: 24px;
`;

/* 상태 표시 (아이콘 + 텍스트) */
export const FocusLeft = styled.div`
  color: #5c5c5c;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 26px;
  letter-spacing: -0.45px;
  display: inline-flex;
  padding: 13px 20px;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  border: 1px solid #eaeaea;
  background: #eaeaea;
  gap: 6px;
`;

/* 슬라이드 본문 */
export const SlideBox = styled.div`
  background-color: white;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 1300x;
  width: 100%;
  text-align: center;
`;

export const NavButton = styled.button`
  padding: 8px 16px;
  border: 1px solid #ddd;
  border-radius: 6px;
  background: ${(p) => (p.disabled ? "#f5f5f5" : "white")};
  cursor: ${(p) => (p.disabled ? "not-allowed" : "pointer")};
`;
