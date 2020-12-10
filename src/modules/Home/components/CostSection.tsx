import React from 'react';
import styled, { css } from 'styled-components';

import { Section, SectionTitle } from '../Home.style';
import ContentContainer from '@components/ContentContainer';
import { colors } from '@constants/theme';

import CostItem from '../components/CostItem';
import { media } from '@utils/mixins';

const COST_ITEM1 = {
  title: 'Studio / One-bedroom',
  price: '$159',
};

const COST_ITEM2 = {
  title: 'Two-bedroom',
  price: '$171',
};

const COST_ITEM3 = {
  title: 'Three-bedroom',
  price: '$196',
};

const MOCK_ITEMS = [COST_ITEM1, COST_ITEM2, COST_ITEM3];

function CostSection() {
  return (
    <SectionGray>
      <ContentContainer>
        <SectionTitle>The price</SectionTitle>
        {/*<Subtitle>Чем чаще ваша уборка - тем ниже стоимость</Subtitle>*/}
        <List>
          {MOCK_ITEMS.map((costItem, index) => (
            <Item key={index}>
              <CostItem costItem={costItem} />
            </Item>
          ))}
        </List>
        {/*<SectionBottom>*/}
        {/*  <BottomLink href="#">Уборка всей квартиры</BottomLink>1 раз в неделю*/}
        {/*</SectionBottom>*/}
      </ContentContainer>
    </SectionGray>
  );
}

const SectionGray = styled(Section)`
  background-color: ${colors.grayBg};
`;

const Subtitle = styled.span`
  display: block;
  max-width: 500px;
  margin: 0 auto 50px;
  font-size: 26px;
  line-height: 36px;
  font-weight: 500;
  letter-spacing: -0.6px;
  text-align: center;

  ${media.mobile(css`
    font-size: 18px;
    line-height: 28px;
  `)}
`;

const List = styled.ul`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;

  ${media.smallTabletAndMobile(css`
    flex-wrap: wrap;
    max-width: 280px;
    margin: 0 auto 40px;
  `)}
`;

const Item = styled.li`
  width: calc(33.333% - 26.3px);

  &:not(:last-child) {
    margin-right: 40px;
  }

  ${media.smallTabletAndMobile(css`
    width: 100%;

    &:not(:last-child) {
      margin-right: 0;
      margin-bottom: 20px;
    }
  `)}
`;

const SectionBottom = styled.p`
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: ${colors.darkText};

  ${media.mobile(css`
    font-size: 14px;
    line-height: 20px;
  `)}
`;

const BottomLink = styled.a`
  display: inline-flex;
  margin-right: 5px;
  color: ${colors.green};
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }
`;

export default CostSection;
