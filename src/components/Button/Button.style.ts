import styled from 'styled-components';

import { colors } from '@constants/theme';

export const StyledButton = styled.button`
  transition: 0.3s;
  border-radius: 5px;
  font-size: 16px;
  line-height: 1;
  padding: 8px 25px;
  background-color: ${colors.yellow};
  color: ${colors.blueDark};
  font-weight: bold;
  text-align: center;

  &:hover {
    background-color: ${colors.yellowDark};
  }
`;
