import React from 'react';
import styled from 'styled-components';

import { Section, SectionTitle } from '../../Home.style';
import ContentContainer from '@components/ContentContainer';
import { colors } from '@constants/theme';

import AccordsBlock from './components/AccordsBlock';

function QaSection() {
  return (
    <SectionGray>
      <ContentContainer>
        <SectionTitle>FAQ</SectionTitle>
        <AccordsBlock />
      </ContentContainer>
    </SectionGray>
  );
}

const SectionGray = styled(Section)`
  background-color: ${colors.grayBg};
`;

export default QaSection;
