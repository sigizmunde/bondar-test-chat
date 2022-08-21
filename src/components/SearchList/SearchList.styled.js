import styled from "styled-components";

export const SchList = styled.ul`
  flex-grow: 1;
  list-style: none;
  margin: 0;
  padding: 0;
  min-height: 156px;
  max-height: 100%;
  overflow-y: scroll;
`;

export const SearchContactLi = styled.li`
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
  margin: 0;
  font-size: 12px;
  font-weight: 400;
  font-style: normal;
  line-height: 1.25;
  color: var(--main-color);
`;
