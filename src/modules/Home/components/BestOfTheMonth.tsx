import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';

import { Section, SectionTitle } from '../Home.style';
import ContentContainer from '@components/ContentContainer';
import { colors } from '@constants/theme';
import image1Src from '@assets/images/home/cleaner1.jpg';
import image1SrcWebp from '@assets/images/home/cleaner1.webp';
import image2Src from '@assets/images/home/cleaner2.jpg';
import image2SrcWebp from '@assets/images/home/cleaner2.webp';
import image3Src from '@assets/images/home/cleaner3.jpg';
import image3SrcWebp from '@assets/images/home/cleaner3.webp';
import useMedia from '@hooks/useMedia';
import Employee from '../components/employee';
import { media } from '@utils/mixins';
import Swiper from 'swiper';
import OrderItem from '@modules/Home/components/OrderItem';

const EMPLOYEE_ITEM1 = {
  imageSrc: image1Src,
  imageSrcWebp: image1SrcWebp,
  name: 'Hanna',
  count: '306 cleanings',
  rating: '4.9',
};

const EMPLOYEE_ITEM2 = {
  imageSrc: image2Src,
  imageSrcWebp: image2SrcWebp,
  name: 'Marta',
  count: '272 cleanings',
  rating: '5.0',
};

const EMPLOYEE_ITEM3 = {
  imageSrc: image3Src,
  imageSrcWebp: image3SrcWebp,
  name: 'Ashly',
  count: '301 cleanings',
  rating: '5.0',
};

const MOCK_ITEMS = [EMPLOYEE_ITEM1, EMPLOYEE_ITEM2, EMPLOYEE_ITEM3];

function BestOfTheMonth() {
  const isMobile = useMedia('(max-width: 767px)');

  useEffect(() => {
    if (!isMobile) return;

    const swiperbestOfMonth = new Swiper('.slider-bestOfMonth', {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: '.swiper-bestOfMonth-pagination',
        type: 'bullets',
      },
    });

    return () => swiperbestOfMonth.destroy(true, true);
  }, [isMobile]);

  return (
    <SectionOverflow>
      <ContentContainer>
        <Title>Best cleaners of the month</Title>
        <SectionIntro>
          Our cleaners go through thorough training and strict examination.
          Hence, you will greet only <ColoredText>the best</ColoredText>{' '}
          cleaners
        </SectionIntro>
        <SliderContainer className="swiper-container slider-bestOfMonth">
          <SliderWrapper className="swiper-wrapper">
            {MOCK_ITEMS.map((employeeItem, index) => (
              <Item key={index} className="swiper-slide">
                <Employee employeeItem={employeeItem} />
              </Item>
            ))}
          </SliderWrapper>
        </SliderContainer>

        <SliderPagination className="swiper-bestOfMonth-pagination" />
      </ContentContainer>
    </SectionOverflow>
  );
}

const SectionOverflow = styled(Section)`
  overflow: hidden;
`;

const Title = styled(SectionTitle)`
  margin-bottom: 40px;
`;

const SectionIntro = styled.p`
  max-width: 500px;
  margin: 0 auto 60px;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: -0.4px;
  text-align: center;
  color: #565656;
`;

const ColoredText = styled.span`
  color: ${colors.green};
`;

const SliderContainer = styled.div``;

const SliderWrapper = styled.ul`
  display: flex;
  justify-content: space-between;

  ${media.mobile(css`
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

const Item = styled.li`
  width: calc(33.333% - 13px);

  &:not(:last-child) {
    margin-right: 20px;
  }

  ${media.tabletAndMobile(css`
    flex: 1 1 40%;

    &:not(:last-child) {
      margin-bottom: 60px;
      margin-right: 0;
    }
  `)}

  ${media.mobile(css`
    margin: 0 auto;
    width: 100%;
    flex: 1 1 100%;
    min-width: calc(100vw - 40px);
    padding: 25px;
    border: 1px solid #dadcda;
    border-radius: 5px;
    //overflow: hidden;
  `)}
`;

export default BestOfTheMonth;
