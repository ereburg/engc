import styled, { css } from 'styled-components';

import { colors } from '@constants/theme';

export const Container = styled.div`
  position: relative;
`;

export function getInputBorderColor(
  props: { invalid?: boolean; focused?: boolean } = {},
): string {
  return props.invalid
    ? colors.red
    : props.focused
    ? colors.green
    : colors.prefixColor;
}

export const Input = styled.input<{
  withPrefix?: boolean;
  invalid?: boolean;
}>`
  width: 100%;
  height: 50px;
  border: 1px solid ${({ invalid }) => getInputBorderColor({ invalid })};
  line-height: 50px;
  padding: 0 15px;
  border-radius: 8px;
  ${props =>
    props.withPrefix
      ? css`
          padding-left: 75px;
        `
      : ''};
  color: ${props => (props.invalid ? colors.red : colors.black)};

  &::placeholder {
    color: ${props => (props.invalid ? colors.red : '#b3b3bb')};
  }

  &:focus {
    border-color: ${({ invalid, readOnly }) =>
      getInputBorderColor({ invalid, focused: !readOnly })};
  }
`;

export const prefixCss = css`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 16px;
  pointer-events: none;
`;

export const Prefix = styled.svg`
  ${prefixCss};
`;
