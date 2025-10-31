import styled from "styled-components";

export const PanelWrapper = styled.div`
  background: #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  width: 15.78vw;
  height: 98.15vh;
  display: flex;
  flex-direction: column;
  border: 1px solid #eaeaea;
`;

export const HeaderBox = styled.div`
  display: flex;
  height: 3.52vh;
  width: 17.03vw;
  padding: 0.74vh 0 0.74vh 1.25vw;
  align-items: center;
  border: 1px solid #eaeaea;
  background: #f9f9f9;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 1.85vh 1.25vw 2.22vh 0.73vw;
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
  padding-right: 0.42vw;
  border: 1px solid #eaeaea;
  background: #fafafa;
  border-radius: 1.04vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  &::-webkit-scrollbar {
    width: 0.31vw;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: #c1c1c1;
    border-radius: 0.16vw;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #a8a8a8;
  }
`;

export const QuestionItem = styled.div`
  margin-bottom: 1.48vh;
  padding: 1.11vh 0.63vw;
  background: #fff;
  border-radius: 0.31vw;
`;

export const SlideLabel = styled.span`
  display: flex;
  padding: 0.19vh 0.21vw;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 0.21vw;
  background: #5c5c5c;
  width: 3.07vw;
  color: #fff;
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: -0.25px;
  margin-right: 0.42vw;
`;

export const Timestamp = styled.span`
  color: #767676;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.3px;
  margin-left: 0.42vw;
`;

export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.74vh;
`;

export const QuestionContent = styled.div`
  color: #666666;
  font-size: 12px;
  margin: 0.74vh 0 0.37vh 0;
`;

export const QuestionText = styled.div`
  color: #111;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.3px;
  margin-top: 0.37vh;
`;

export const Scrollbar = styled.div`
  width: 0.31vw;
  background: #e0e0e0;
  border-radius: 0.16vw;
  position: absolute;
  right: 0.42vw;
  top: 5.56vh;
  bottom: 1.85vh;
`;

export const LockBanner = styled.div`
  border-radius: 24.014px;
  border: 2px solid #fff;
  background: rgba(247, 247, 251, 0.9);
  box-shadow: 0 8px 12px 0 rgba(0, 0, 0, 0.12);
  backdrop-filter: blur(6px);
  display: inline-flex;
  padding: 5px 18px 5px 18px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: center;
  margin-top: auto;
  margin-bottom: 1.48vh;

  color: #5c5c5c;
  font-family: Pretendard;
  font-size: 13px;
  font-weight: 600;
`;

export const QuestionInputContainer = styled.div`
  display: flex;
  width: 12.14vw;
  height: 4.44vh;
  padding: 1.3vh 0.83vw;
  justify-content: ${(props) =>
    props.$isInputting ? "center" : "space-between"};
  align-items: center;
  background: #ffffff;
  border: 1px solid #eaeaea;
  border-radius: 0.42vw;
  margin-top: auto;
  transition: all 0.3s ease;
  flex-shrink: 0;
  box-sizing: border-box;
  margin-bottom: 1.48vh;
`;

export const QuestionInput = styled.textarea`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-size: 14px;
  color: #333;
  resize: none;
  min-height: ${(props) => (props.$isInputting ? "1.85vh" : "1.85vh")};
  max-height: 3.7vh;
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
  width: 2.96vh;
  height: 2.96vh;
  background: #5c5c5c;
  border: none;
  border-radius: 0.37vh;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-left: 0.42vw;
  transition: background-color 0.2s ease;

  &:hover {
    background: #4a4a4a;
  }
`;
