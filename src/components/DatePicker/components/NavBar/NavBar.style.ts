import styled, { css } from 'styled-components';

export const NavBar = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  top: 20px;
  height: 24px;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
`;

export const Button = styled.button<{ left?: boolean; right?: boolean }>`
  background-color: transparent;
  border: 0;
  cursor: pointer;
  padding: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: ${props => (props.right ? 'rotate(180deg)' : 'none')};

  svg {
    display: block;
  }

  ${props =>
    props.hidden
      ? css`
          visibility: hidden;
          pointer-events: none;
        `
      : null}
`;
