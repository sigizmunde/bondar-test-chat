import styled from "styled-components";

export const Form = styled.form`
  /* position: relative; */
  margin: 0;
  margin-top: 16px;
  padding: 0;
`;

export const FirstIcon = styled.svg`
  position: absolute;
  box-sizing: content-box;
  width: 12px;
  height: 12px;
  padding: 0 12px;
  transform: translateY(8px);
  fill: var(--secondary-color);
  cursor: pointer;
`;

export const Input = styled.input`
  width: 100%;
  height: 28px;
  padding: 0 16px 0 32px;
  color: var(--main-color);
  background-color: var(--textarea-color);
  border: var(--border);
  border-radius: 14px;
  &::placeholder {
    font-size: 12px;
    font-weight: 700;
    color: var(--secondary-color);
  }
`;

export const DeleteIcon = styled.svg`
  position: absolute;
  box-sizing: content-box;
  width: 16px;
  height: 16px;
  padding: 12px;
  transform: translate(-36px, -6px);
  fill: var(--accent-color);
  cursor: pointer;
`;
