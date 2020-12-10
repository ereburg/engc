import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';

import { Section, SectionTitle } from '../Home.style';
import ContentContainer from '@components/ContentContainer';
import { ReactComponent as CalendarIcon } from '@assets/svg/calendar.svg';
import { ReactComponent as CleanerIcon } from '@assets/svg/cleaner.svg';
import { ReactComponent as GuaranteeIcon } from '@assets/svg/guarantee.svg';
import GuaranteeImg from '@assets/images/home/guarantee.png';
import Image from '@components/Image';

import OrderItem from '../components/OrderItem';
import { media } from '@utils/mixins';
import Swiper from 'swiper';
import { ReactComponent as SliderArrow } from '@assets/svg/slider-arrow.svg';
import { colors } from '@constants/theme';
import useMedia from '@hooks/useMedia';

const ORDER_ITEM1 = {
  title: 'Pick the date',
  text: 'You can pick any date that works for you',
  itemIcon: <CalendarIcon />,
};

const ORDER_ITEM2 = {
  title: 'Greet the cleaner at scheduled time',
  text:
    'Every Get Clean cleaner had a background check and has daily health checks',
  itemIcon: <CleanerIcon />,
};

const ORDER_ITEM3 = {
  title: 'We hold up to our standards',
  text:
    'The quality of our cleaning service should be impeccable. But if you are dissatisfied - we will provide the service for free',
  itemIcon: <Image src={GuaranteeImg} />,
};

const MOCK_ITEMS = [ORDER_ITEM1, ORDER_ITEM2, ORDER_ITEM3];

function HowToOrder() {
  const isMobile = useMedia('(max-width: 767px)');

  useEffect(() => {
    if (!isMobile) return;

    const swiperhowToOrder = new Swiper('.slider-howToOrder', {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: '.swiper-howToOrder-pagination',
        type: 'bullets',
      },
    });
    return () => swiperhowToOrder.destroy(true, true);
  }, [isMobile]);

  return (
    <Section>
      <ContentContainer>
        <SectionTitle>How to place an order?</SectionTitle>
        <SliderHowToOrder>
          <SliderContainer className="swiper-container slider-howToOrder">
            <SliderWrapper className="swiper-wrapper">
              {MOCK_ITEMS.map((orderItem, index) => (
                <ListItem key={index} className="swiper-slide">
                  <OrderItem orderItem={orderItem} />
                </ListItem>
              ))}
            </SliderWrapper>
          </SliderContainer>

          <SliderPagination className="swiper-howToOrder-pagination" />
        </SliderHowToOrder>
      </ContentContainer>
    </Section>
  );
}

const SliderHowToOrder = styled.div``;
const SliderContainer = styled.div``;
const SliderWrapper = styled.ul`
  display: flex;
  justify-content: space-between;

  ${media.tablet(css`
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    max-width: 505px;
    margin: 0 auto;

    > li {
      flex: 1 1 100%;

      &:not(:last-child) {
        margin-bottom: 55px;
      }
    }
  `)}

  ${media.mobile(css`
    max-width: 640px;
    margin: 0 auto;
  `)}
`;

const SliderPagination = styled.div`
  display: none;

  ${media.mobile(css`
    display: flex;
    justify-content: center;

    .swiper-pagination-bullet {
      width: 10px;
      height: 10px;

      &:not(:last-child) {
        margin-right: 10px;
      }

      &-active {
        background: ${colors.green};
      }
    }
  `)}
`;

const List = styled.ul`
  display: flex;
  justify-content: space-between;

  ${media.mobile(css`
    max-width: 640px;
    margin: 0 auto;
  `)}
`;

const ListItem = styled.li`
  width: 33.3333%;
  padding: 0 20px;

  ${media.mobile(css`
    //max-width: 500px;
    margin: 0 auto;
    width: 100%;
    padding: 0;

    &:not(:last-child) {
      margin-bottom: 55px;
    }
  `)}
`;

export default HowToOrder;
