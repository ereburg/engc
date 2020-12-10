import React, { useState } from 'react';
import { SectionTitle, Section } from '../Home.style';
import ContentContainer from '@components/ContentContainer';
import Tabs from '@modules/Home/components/Tabs';

function WhatIncluded() {
  return (
    <Section>
      <ContentContainer>
        <SectionTitle>What cleaning includes</SectionTitle>
      </ContentContainer>

      <Tabs />
    </Section>
  );
}

export default WhatIncluded;
