import styled from "styled-components";

export const PanelWrapper = styled.div`
  background: #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  width: 303px;
  height: 1060px;
  display: flex;
  flex-direction: column;
  border: 1px solid #eaeaea;
`;

export const HeaderBox = styled.div`
  display: flex;
  height: 38px;
  width: 327px;
  padding: 8px 0px 8px 24px;
  align-items: center;
  border: 1px solid #eaeaea;
  background: #f9f9f9;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 20px 24px 24px 14px;
`;

export const Title = styled.h2`
  color: #303030;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: -0.375px;
  margin: 0;
`;

export const QuestionList = styled.div`
  flex: 1;
  overflow-y: auto;
  padding-right: 8px;
  border: 1px solid #eaeaea;
  background: #fafafa;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: #c1c1c1;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #a8a8a8;
  }
`;

export const QuestionItem = styled.div`
  margin-bottom: 16px;
  padding: 12px;
  background: #fff;
  border-radius: 6px;
`;

export const SlideLabel = styled.span`
  display: flex;
  padding: 2px 4px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 4px;
  background: #5c5c5c;
  width: 59px;
  color: #fff;
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: -0.25px;
  margin-right: 8px;
`;

export const Timestamp = styled.span`
  color: #767676;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.3px;
  margin-left: 8px;
`;

export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

export const QuestionContent = styled.div`
  color: #666666;
  font-size: 12px;
  margin: 8px 0 4px 0;
`;

export const QuestionText = styled.div`
  color: #111;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.3px;
  margin-top: 4px;
`;

export const Scrollbar = styled.div`
  width: 6px;
  background: #e0e0e0;
  border-radius: 3px;
  position: absolute;
  right: 8px;
  top: 60px;
  bottom: 20px;
`;

export const QuestionInputContainer = styled.div`
  display: flex;
  width: 233px;
  height: 48px;
  padding: 14px 16px;
  justify-content: ${(props) =>
    props.$isInputting ? "center" : "space-between"};
  align-items: center;
  background: #ffffff;
  border: 1px solid #eaeaea;
  border-radius: 8px;
  margin-top: auto;
  transition: all 0.3s ease;
  flex-shrink: 0;
  box-sizing: border-box;
  margin-bottom: 16px;
`;

export const QuestionInput = styled.textarea`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-size: 14px;
  color: #333;
  resize: none;
  min-height: ${(props) => (props.$isInputting ? "20px" : "20px")};
  max-height: 40px;
  line-height: 1.4;

  &::placeholder {
    color: #999;
    overflow: hidden;
    text-overflow: ellipsis;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: -0.35px;
  }
`;

export const SubmitButton = styled.button`
  width: 32px;
  height: 32px;
  background: #5c5c5c;
  border: none;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-left: 8px;
  transition: background-color 0.2s ease;

  &:hover {
    background: #4a4a4a;
  }
`;
