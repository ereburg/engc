import React from 'react';
import styled from 'styled-components';

import { colors } from '@constants/theme';

import { TextInputPrefixProps } from '../TextInput';
import { getInputBorderColor } from '../TextInput.style';

function PhonePrefix(props: TextInputPrefixProps) {
  return <Prefix {...props}>+1</Prefix>;
}

const Prefix = styled.div<TextInputPrefixProps>`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px 0 0 8px;
  background-color: ${props => getInputBorderColor(props)};
  font-weight: 500;
  color: ${props =>
    props.invalid || props.focused ? colors.white : colors.blackText};
  width: 60px;
  font-size: 14px;
`;

export default PhonePrefix;
