import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  width: 100vw;
  height: 40px;
  display: flex;
  align-items: center;
  background: #fff;
  border-bottom: 1px solid #e6e6e6;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 18px;
  margin: 0 16px 0 12px;
  letter-spacing: -0.2px;
`;

const Body = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// children props로 내부 아이템들을 자유롭게 삽입
function HeaderBar({ children }) {
    return (
        <HeaderWrapper>
            <Logo>
                {/* 토글 아이콘, Boini 로고 등 본문에 맞게 넣을 예정*/}
                <span style={{ marginRight: 8 }}>●</span>
                Boini
            </Logo>
            <Body>
                {children}
            </Body>
        </HeaderWrapper>
    );
}
export default HeaderBar;