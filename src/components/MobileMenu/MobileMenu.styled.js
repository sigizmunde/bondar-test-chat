import styled from "styled-components";

export const MenuContainer = styled.div`
  display: none;
  @media screen and (max-width: 620px) {
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 0 0 0 auto;
  }
`;

export const MobileBtn = styled.svg`
  width: 48px;
  height: 48px;
  padding: 8px;
  fill: currentColor;
  cursor: pointer;
`;
