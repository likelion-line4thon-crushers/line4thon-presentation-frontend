import styled from "styled-components";

export const EmojiContainer = styled.div`
  width: 36.67vw; /* 704px @ 1920 */
  height: 7.41vh; /* 80px @ 1080 */
  background: #fafafa;
  border: 1px solid #eaeaea;

  border-radius: 5.21vw; /* 100px */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.11vh 1.88vw; /* 12px 36px */
  margin: 0 auto;
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
`;

export const EmojiWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  gap: 0.42vw; /* 8px */
`;

export const EmojiItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.96vh; /* 32px */
  height: 2.96vh; /* 32px */
  cursor: pointer;
  border-radius: 50%;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #e0e0e0;
  }
`;

export const EmojiIcon = styled.img`
  width: 1.85vh; /* 20px */
  height: 1.85vh; /* 20px */
  object-fit: contain;
  filter: grayscale(100%);
`;

export const SpacingBox = styled.div`
  display: none;
`;
