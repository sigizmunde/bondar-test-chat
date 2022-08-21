import styled from "styled-components";

export const LoginPanel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  background-color: transparent;
`;

export const UserDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  & p {
    font-size: 14px;
    font-weight: 500;
    color: var(--secondary-color);
  }
`;

export const LoginButton = styled.button`
  height: 32px;
  padding: 8px 16px;
  border-radius: 16px;
  color: var(--inverted-color);
  background-color: var(--message-color);
  border: none;
  cursor: pointer;
`;

export const LogoutButton = styled.button`
  height: 32px;
  padding: 8px 16px;
  border-radius: 16px;
  color: var(--secondary-color);
  background-color: var(--reply-color);
  border: none;
  cursor: pointer;
`;
