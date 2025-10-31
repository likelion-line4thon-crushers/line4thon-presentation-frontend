import React from "react";
import styled from "styled-components";
import ShareIconDefault from "../../../assets/images/share.png";
import ExitIconDefault from "../../../assets/images/getout.png";

const BasePillButton = styled.button`
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

const ExitPillButton = styled(BasePillButton)`
  background: #303030;
  border: 1px solid #cacaca;
  color: #fff;
  justify-content: center;

  &:hover {
    background: #303030;
  }
`;

const renderContent = (iconSrc, alt, children) => (
  <>
    {iconSrc ? <img src={iconSrc} alt={alt} /> : null}
    {children}
  </>
);

export const ShareButton = React.forwardRef(
  (
    {
      children = "공유하기",
      iconSrc = ShareIconDefault,
      iconAlt = typeof children === "string" ? children : "공유하기",
      ...props
    },
    ref
  ) => (
    <BasePillButton ref={ref} {...props}>
      {renderContent(iconSrc, iconAlt, children)}
    </BasePillButton>
  )
);

ShareButton.displayName = "ShareButton";

export const ExitButton = React.forwardRef(
  (
    {
      children = "나가기",
      iconSrc = ExitIconDefault,
      iconAlt = typeof children === "string" ? children : "나가기",
      ...props
    },
    ref
  ) => (
    <ExitPillButton ref={ref} {...props}>
      {renderContent(iconSrc, iconAlt, children)}
    </ExitPillButton>
  )
);

ExitButton.displayName = "ExitButton";

export { BasePillButton };
