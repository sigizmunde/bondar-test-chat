import styled from "styled-components";

export const ChWindow = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 0;
`;

export const ContactPanel = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 24px;
  background-color: var(--secondary-back-color);
  & p {
    font-size: 18px;
    font-weight: 500;
  }
`;

export const ChatPanel = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 32px;
  padding: 12px;
  overflow-y: scroll;
  background-color: var(--textarea-color);
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
