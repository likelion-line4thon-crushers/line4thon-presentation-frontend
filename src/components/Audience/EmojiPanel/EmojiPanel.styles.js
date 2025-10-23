import styled from "styled-components";

export const EmojiContainer = styled.div`
  width: 704px;
  height: 80px;
  background: #fafafa;
  border: 1px solid #eaeaea;

  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 36px;
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
  gap: 8px;
`;

export const EmojiItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  cursor: pointer;
  border-radius: 50%;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #e0e0e0;
  }
`;

export const EmojiIcon = styled.img`
  width: 20px;
  height: 20px;
  object-fit: contain;
  filter: grayscale(100%);
`;

export const SpacingBox = styled.div`
  display: none;
`;
