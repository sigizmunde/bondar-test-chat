import styled from "styled-components";

export const LoginPanel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  background-color: transparent;
`;

export const LoginButton = styled.button`
  height: 32px;
  padding: 8px 16px;
  border-radius: 16px;
  color: var(--inverted-color);
  background-color: var(--message-color);
  cursor: pointer;
`;

export const LogoutButton = styled.button`
  height: 32px;
  padding: 8px 16px;
  border-radius: 16px;
  color: var(--secondary-color);
  background-color: var(--reply-color);
  cursor: pointer;
  :focus {
    border: var(--border);
  }
`;
