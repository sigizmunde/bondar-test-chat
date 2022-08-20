import styled from "styled-components";

export const LayoutContainer = styled.main`
  display: flex;
  flex-wrap: nowrap;
  gap: 0;
  max-width: 960px;
  height: 96vh;
  margin: 0 auto;
`;

export const PanelHeader = styled.div`
  margin: 0;
  width: 100%;
  height: auto;
  padding: 12px;
  background-color: var(--secondary-back-color);
`;

export const ChatHead = styled.div`
  margin: 0;
  width: 100%;
  height: 74px;
  padding: 12px;
  background-color: var(--main-back-color);
  & h2 {
    font-size: 18px;
    font-weight: 400;
    font-style: normal;
    color: var(--accent-color);
  }
`;
