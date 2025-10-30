import React from "react";
import {
  EmojiContainer,
  EmojiWrapper,
  EmojiItem,
  EmojiIcon,
  SpacingBox,
} from "./EmojiPanel.styles";
import interestSVG from "../../../assets/icons/Emoji/Interesting.png";
import surpriseSVG from "../../../assets/icons/Emoji/Surprising.png";
import curiousSVG from "../../../assets/icons/Emoji/Curious.png";
import excitingSVG from "../../../assets/icons/Emoji/Exciting.png";
import angrySVG from "../../../assets/icons/Emoji/Angry.png";
import sadSVG from "../../../assets/icons/Emoji/Sad.png";
import okSVG from "../../../assets/icons/Emoji/O.png";
import xSVG from "../../../assets/icons/Emoji/X.png";

const EmojiPanel = () => {
  const emojis = [
    { id: 1, icon: interestSVG },
    { id: 2, icon: surpriseSVG },
    { id: 3, icon: curiousSVG },
    { id: 4, icon: excitingSVG },
    { id: 5, icon: angrySVG },
    { id: 6, icon: sadSVG },
    { id: 7, icon: okSVG },
    { id: 8, icon: xSVG },
  ];

  return (
    <EmojiContainer>
      <EmojiWrapper>
        {emojis.map((emoji) => (
          <EmojiItem key={emoji.id}>
            <EmojiIcon src={emoji.icon} alt={`이모티콘 ${emoji.id}`} />
          </EmojiItem>
        ))}
      </EmojiWrapper>
    </EmojiContainer>
  );
};

export default EmojiPanel;
