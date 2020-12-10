import styled from 'styled-components';

import { colors } from '@constants/theme';

export const SectionTitle = styled.h2`
  margin-bottom: 60px;
  font-size: 32px;
  line-height: 45px;
  font-weight: 500;
  color: ${colors.black};
  text-align: center;
  letter-spacing: -0.8px;
`;

export const Section = styled.section`
  padding: 60px 0;
  color: ${colors.blackText};
`;
