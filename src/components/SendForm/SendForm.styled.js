import styled from "styled-components";

export const Form = styled.form`
  /* position: relative; */
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 0;
  padding: 16px;
  & svg {
    position: absolute;
    box-sizing: content-box;
    width: 24px;
    height: 24px;
    padding: 0 12px;
    transform: translateY(8px);
    fill: var(--secondary-color);
    cursor: pointer;
  }
`;

export const SendInput = styled.input`
  width: 100%;
  height: 42px;
  padding: 12px 32px 12px 16px;
  color: var(--main-color);
  background-color: var(--textarea-color);
  border: var(--border);
  border-radius: 18px;
  font-size: 15px;
  font-weight: 400;
  &::placeholder {
    font-size: 15px;
    font-weight: 400;
    color: var(--secondary-color);
  }
`;
