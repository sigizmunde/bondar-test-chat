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
  border-bottom: var(--border);
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

export const H2 = styled.h2`
  margin: 12px 0 0;
`;

export const Warn = styled.span`
  color: var(--secondary-color);
`;

export const MiddleHeading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  width: 100%;
  height: 24px;
  padding: 16px;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  color: var(--inverted-color);
  background-color: var(--accent-color);
  border-bottom: var(--border);
`;
