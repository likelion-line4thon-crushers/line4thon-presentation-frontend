import React from "react";
import styled, { css } from "styled-components";
import { useLocation } from "react-router-dom";
import BoiniLogo from "../../assets/images/Boini_logo.svg";
import LiveIcon from "../../assets/images/live.png";
import ShareIcon from "../../assets/images/share.png";
import ExitIcon from "../../assets/images/getout.png";

const HeaderWrapper = styled.header`
  width: 100vw;
  height: 3.7vh; /* 40px -> 3.7vh */
  display: flex;
  align-items: center;
  background: #fff;
  border-bottom: 0.05vw solid #e6e6e6;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  padding: 0 0.8vw;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;

  img {
    width: auto;
    height: 2.2vh; /* 24px -> 2.2vh */
  }

  ${({ isMain }) =>
    isMain
      ? css`
          /* ✅ 메인 페이지 중앙 정렬 */
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          margin: 0;
        `
      : css`
          margin: 0 0.83vw 0 0.63vw; /* (16px,12px) -> vw 단위 */
        `}
`;

const Body = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6vw;
`;

const LiveBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.42vw;
  padding: 0.4vh 1vw;
  border-radius: 999px;
  background: #fff;
  color: #5c5c5c;
  font-family: Pretendard;
  font-size: 0.83vw;
  font-weight: 500;

  img {
    width: 1.2vw;
    height: 1.2vw;
    object-fit: contain;
  }
`;

const RightActions = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.63vw;
  margin-right: 20px;
`;

const PillButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.42vw;
  padding: 10px 14px;
  border-radius: 10px;
  border: 1px solid #eaeaea;
  background: #fff;
  color: #000000;
  font-family: Pretendard;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease;
  width: 100px;
  height: 30px;

  img {
    width: 1vw;
    height: 1vw;
    object-fit: contain;
  }

  &:hover {
    background: #f4f4f4;
  }
`;

const ExitButton = styled(PillButton)`
  background: #303030;
  border: 1px solid #cacaca;
  color: #fff;
  justify-content: center;
  &:hover {
    background: #303030;
  }
`;

function HeaderBar({ children }) {
  const location = useLocation();
  const isMain = location.pathname === "/"; // ✅ 메인페이지 감지
  const isAudienceView = location.pathname === "/audience";

  return (
    <HeaderWrapper>
      <Logo isMain={isMain}>
        <img src={BoiniLogo} alt="Boini logo" />
      </Logo>

      {/* ✅ 메인페이지에는 children 없음, 그 외 페이지는 자유롭게 콘텐츠 배치 */}
      {!isMain && (
        <Body>
          {isAudienceView && (
            <LiveBadge>
              <img src={LiveIcon} alt="live" />
              라이브 진행 중
            </LiveBadge>
          )}
        </Body>
      )}

      {isAudienceView && (
        <RightActions>
          <PillButton>
            <img src={ShareIcon} alt="공유" />
            공유하기
          </PillButton>
          <ExitButton>
            <img src={ExitIcon} alt="나가기" />
            나가기
          </ExitButton>
        </RightActions>
      )}
    </HeaderWrapper>
  );
}

export default HeaderBar;
