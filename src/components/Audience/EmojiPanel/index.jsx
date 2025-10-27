import React from "react";
import {
  EmojiContainer,
  EmojiWrapper,
  EmojiItem,
  EmojiIcon,
  SpacingBox,
} from "./EmojiPanel.styles";
import goodSVG from "../../../assets/images/good.svg";

const EmojiPanel = () => {
  const emojis = [
    { id: 1, icon: goodSVG },
    { id: 2, icon: goodSVG },
    { id: 3, icon: goodSVG },
    { id: 4, icon: goodSVG },
    { id: 5, icon: goodSVG },
    { id: 6, icon: goodSVG },
    { id: 7, icon: goodSVG },
    { id: 8, icon: goodSVG },
  ];

  return (
    <EmojiContainer>
      <EmojiWrapper>
        {emojis.map((emoji) => (
          <EmojiItem key={emoji.id}>
            <EmojiIcon src={emoji.icon} alt={`이모지 ${emoji.id}`} />
          </EmojiItem>
        ))}
      </EmojiWrapper>
    </EmojiContainer>
  );
};

export default EmojiPanel;
