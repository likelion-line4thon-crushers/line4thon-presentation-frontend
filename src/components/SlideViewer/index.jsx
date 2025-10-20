import React from "react";
import {
    Main,
    SlideBox,
    FocusBar,
    FocusLeft,
} from "./SlideViewer.styles";

import FocusIcon from "../../assets/images/focus.svg"; // 🔹 상단 아이콘 예시

const SlideViewer = ({ slides, currentSlide }) => (
    <Main>
        <FocusBar>
            <FocusLeft>
                <img src={FocusIcon} alt="집중 유도" width={20} height={20} />
                <span>집중 유도</span>
            </FocusLeft>

        </FocusBar>

        <SlideBox>
            <img
                src={slides[currentSlide]}
                alt={`슬라이드 ${currentSlide + 1}`}
                style={{
                    maxWidth: "100%",
                    borderRadius: "8px",
                    border: "1px solid #eee",
                }}
            />
        </SlideBox>
    </Main>
);

export default SlideViewer;
