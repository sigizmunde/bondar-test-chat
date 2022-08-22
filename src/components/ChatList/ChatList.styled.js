import styled from "styled-components";

export const ChList = styled.ul`
  flex-grow: 1;
  list-style: none;
  margin: 0;
  padding: 0;
  max-height: 100%;
  overflow-y: scroll;
`;

export const ContactLi = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  width: 100%;
  height: 74px;
  padding: 16px;
  padding-left: 12px;
  background-color: var(--main-back-color);
  border-bottom: var(--border);
  cursor: pointer;
`;

export const Info = styled.div`
  width: 100%;
`;

export const Caption = styled.p`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0;
`;

export const Name = styled.span`
  margin: 0;
  font-size: 15px;
  font-weight: 400;
  font-style: normal;
  line-height: 1.25;
  color: var(--main-color);
`;

export const Time = styled.span`
  min-width: 80px;
  margin: 0;
  text-align: end;
  font-size: 12px;
  font-weight: 400;
  font-style: normal;
  line-height: 1.25;
  color: var(--main-color);
`;

export const Text = styled.p`
  margin: 0;
  font-size: 12px;
  font-weight: 400;
  font-style: normal;
  line-height: 1.25;
  color: var(--secondary-color);
`;
