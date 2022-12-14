import styled from "styled-components";

export const ChWindow = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  gap: 0;
  @media screen and (max-width: 620px) {
    position: absolute;
    height: 100%;
    z-index: 10;
  }
`;

export const ContactPanel = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 24px;
  padding: 12px 16px;
  background-color: var(--secondary-back-color);
  border-bottom: var(--border);
`;

export const CaptionName = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: 500;
`;

export const Warn = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  padding: 12px;
  font-size: 15px;
  font-weight: 400;
  color: var(--inverted-color);
  background-color: var(--accent-color);
`;

export const ClearBtn = styled.svg`
  width: 24px;
  height: 24px;
  padding: 4px;
  fill: currentColor;
  cursor: pointer;
`;

export const ChatPanel = styled.div`
  flex-grow: 1;
  padding: 12px;
  overflow-y: scroll;
  background-color: var(--textarea-color);
  border-bottom: var(--border);
  transition: all 250ms;
`;

export const FlexWrap = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 16px;
`;

export const ChatMessage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;

  &.in {
    align-items: flex-start;
  }
  &.in p:first-child {
    color: var(--inverted-color);
    background-color: var(--message-color);
  }
  &.out {
    align-items: flex-end;
  }
  &.out p:first-child {
    color: var(--main-color);
    background-color: var(--reply-color);
  }
`;

export const MessageText = styled.p`
  max-width: 90%;
  min-height: 36px;
  border-radius: 18px;
  margin: 0;
  padding: 10px 12px;
  font-size: 15px;
  font-weight: 400;
  font-style: normal;
`;

export const MessageTimeStamp = styled.p`
  margin: 0;
  font-size: 11px;
  color: var(--secondary-color);
`;
