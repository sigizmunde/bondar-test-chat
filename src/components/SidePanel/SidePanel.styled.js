import styled from "styled-components";

export const SidePanel = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0;
  width: 35%;
  min-width: 320px;
  max-width: 480px;
  max-height: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow-y: auto;
  scrollbar-width: 8px;
  color: var(--main-color);
  background-color: var(--main-back-color);
  border-right: var(--border);
`;
