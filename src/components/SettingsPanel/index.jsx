import React from "react";
import {
    PanelWrapper,
    Section,
    Title,
    AudienceCountWrapper,
    AudienceIcon,
    AudienceNum,
    QuickTogglesGrid,
    ToggleBox,
    ToggleLabel,
    ToggleDescription,
    ToggleInput,
    SingleToggleInput,
    SingleToggleBox,
    LiveBox,
    LiveDesc,
    LiveButton,
} from "./SettingsPanel.styles";

import AudienceSVG from "../../assets/images/people.svg";
import LiveWaitingIcon from "../../assets/images/live.svg";
import LockIcon from "../../assets/images/lock.svg";


const SettingsPanel = () => (
    <PanelWrapper>
        <QuickSettingsSection />
        <LiveQuestionSection />
    </PanelWrapper>
);

const QuickSettingsSection = () => (
    <Section>
        <Title>빠른 설정</Title>
        <AudienceCount />
        <QuickTogglesGrid>
            <QuickSettingToggle
                label="원탭 이모지"
                description="원탭 이모지 반응을 켜거나 끌 수 있습니다."
            />
            <QuickSettingToggle
                label="실시간 질문"
                description="청중의 실시간 질문 기능을 켜거나 끌 수 있습니다."
            />
            <QuickSettingToggle
                label="AI 실시간 피드백"
                description="청중의 반응을 실시간으로 분석해 요약해드립니다."
            />
            <QuickSettingToggle
                label="라이브 시간"
                description="라이브 전체 시간을 켜거나 끌 수 있습니다."
            />
        </QuickTogglesGrid>

        {/* 단일 토글 박스 */}
        <SingleToggleBox>
            <div className="toggle-left">
                <ToggleLabel>다음 구간 슬라이드 공개하기</ToggleLabel>
                <ToggleDescription>
                    청중이 다음 화면들을 미리 볼 수 있어요
                </ToggleDescription>
            </div>
            <SingleToggleInput type="checkbox" defaultChecked />
        </SingleToggleBox>
    </Section>
);

const AudienceCount = () => (
    <AudienceCountWrapper>
        <AudienceIcon src={AudienceSVG} alt="청중 아이콘" />
        <span>청중 수</span>
        <AudienceNum>00/50</AudienceNum>
    </AudienceCountWrapper>
);

const QuickSettingToggle = ({ label, description }) => (
    <ToggleBox>
        <ToggleLabel>{label}</ToggleLabel>
        <ToggleDescription>{description}</ToggleDescription>
        <ToggleInput type="checkbox" />
    </ToggleBox>
);

const LiveQuestionSection = () => (
    <Section>
        <Title>실시간 질문</Title>
        <LiveWaitingBox />
    </Section>
);

const LiveWaitingBox = () => (
    <LiveBox>
        <img
            src={LiveWaitingIcon}
            alt="Live 대기 중 아이콘"
        />
        <LiveDesc>Live 대기 중입니다...</LiveDesc>
        <LiveButton disabled>
            <img
                src={LockIcon}
                alt="잠금 아이콘"
            />
            실시간 질문 기능이 잠겼습니다
        </LiveButton>

    </LiveBox>
);

export default SettingsPanel;
