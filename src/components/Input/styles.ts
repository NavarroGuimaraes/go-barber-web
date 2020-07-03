import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #232129;
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  display: flex;
  align-items: center;
  transition: color 0.5s, border 0.5s;

  border: 2px solid #232129;
  color: #666360;

  ${(props) =>
    props.isFocused &&
    css`
      border: 2px solid #ff9000;
      color: #ff9000;
    `}

  input {
    background: transparent;
    border: 0;
    flex: 1;
    color: #f4ede8;

    &::placeholder {
      color: #666360;
    }
  }

  & + div {
    margin-top: 8px;
  }

  svg {
    margin-right: 16px;
  }
`;
