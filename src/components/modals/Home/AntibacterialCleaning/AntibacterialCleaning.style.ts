import styled from 'styled-components';
import { colors } from '@constants/theme';

export const ItemIcon = styled.div`
  display: inline-flex;
  align-items: flex-end;
  height: 65px;
  margin-bottom: 30px;
  color: ${colors.green};
`;

export const ItemTitle = styled.span`
  display: block;
  margin-bottom: 30px;
  font-size: 18px;
  line-height: 24px;
  font-weight: bold;
`;
