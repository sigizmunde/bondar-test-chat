import styled from "styled-components";

export const AvatarWrapper = styled.div`
  position: relative;
  width: 32px;
  height: 32px;
  background-color: transparent;
  & img {
    display: block;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: var(--secondary-color);
  }
  & svg {
    display: block;
    position: absolute;
    right: -8px;
    bottom: -4px;
    width: 16px;
    height: 16px;
    fill: green;
    z-index: 1;
  }
`;
