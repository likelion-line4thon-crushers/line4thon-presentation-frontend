import React from "react";
import {
    Sidebar,
    SlideList,
    SlideThumb,
    SlideImage,
    SlideIndex,
} from "./SidebarSlides.styles";

const SidebarSlides = ({
    slides,
    currentSlide,
    setCurrentSlide,
}) => {
    return (
        <Sidebar>

            <SlideList>
                {slides.map((slide, i) => (
                    <SlideThumb
                        key={i}
                        $active={i === currentSlide}
                        onClick={() => setCurrentSlide(i)}
                    >
                        <SlideImage src={slide} alt={`슬라이드 ${i + 1}`} />
                        {/* <SlideIndex>{i + 1}</SlideIndex> */}
                        <SlideIndex $active={i === currentSlide}>{i + 1}</SlideIndex>
                        
                    </SlideThumb>
                ))}
            </SlideList>
        </Sidebar>
    );
};

export default SidebarSlides;
