import React from 'react';
import styled from 'styled-components';
// import { useModal } from '@components/Modal';

import Hero from './components/Hero';
import HowToOrder from './components/HowToOrder';
import WhatIncluded from './components/WhatIncluded';
import CostSection from './components/CostSection';
import BestOfTheMonth from './components/BestOfTheMonth';
import QaSection from './components/QaSection/QaSection';
import BottomSection from './components/BottomSection';
// import CleaningList from '@components/modals/CleaningList/CleaningList';
// import AntibacterialCleaning from '@components/modals/Home/AntibacterialCleaning/AntibacterialCleaning';

function Home() {
  // const openModal = useModal();
  //
  // function handleCleaningList() {
  //   openModal(CleaningList, {});
  // }
  // setTimeout(handleCleaningList, 1000);

  return (
    <Wrapper>
      <Hero />
      <HowToOrder />
      <WhatIncluded />
      <CostSection />
      <BestOfTheMonth />
      <QaSection />
      <BottomSection />
    </Wrapper>
  );
}

const Wrapper = styled.div``;

export default Home;
