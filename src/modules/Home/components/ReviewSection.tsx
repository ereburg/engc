import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import Swiper from 'swiper';

import { Section, SectionTitle } from '../Home.style';
import ContentContainer from '@components/ContentContainer';
import { colors } from '@constants/theme';
import { ReactComponent as SliderArrow } from '@assets/svg/slider-arrow.svg';
import { media } from '@utils/mixins';

const LINKS = [
  'https://www.instagram.com/p/BR_TyISlTEg/embed/captioned/?cr=1&v=7&wp=578&rd=https%3A%2F%2Fgetclean.by&rp=%2F#%7B%22ci%22%3A7%2C%22os%22%3A1586.0699999611825%7D',
  'https://www.instagram.com/p/BVH7k3jDX1o/embed/captioned/?cr=1&v=7&wp=578&rd=https%3A%2F%2Fgetclean.by&rp=%2F#%7B%22ci%22%3A8%2C%22os%22%3A1611.2649999558926%7D',
  'https://www.instagram.com/p/BSYAZ_8lKW3/embed/captioned/?cr=1&v=7&wp=578&rd=https%3A%2F%2Fgetclean.by&rp=%2F#%7B%22ci%22%3A2%2C%22os%22%3A626.4649999793619%7D',
  'https://www.instagram.com/p/BU4PBERB9ii/embed/captioned/?cr=1&v=7&wp=578&rd=https%3A%2F%2Fgetclean.by&rp=%2F#%7B%22ci%22%3A3%2C%22os%22%3A1164.5299999509007%7D',
  'https://www.instagram.com/p/BTdpzDQBiOE/embed/captioned/?cr=1&v=7&wp=578&rd=https%3A%2F%2Fgetclean.by&rp=%2F#%7B%22ci%22%3A4%2C%22os%22%3A1198.4800000209361%7D',
  'https://www.instagram.com/p/BVnDSCxjENT/embed/captioned/?cr=1&v=7&wp=578&rd=https%3A%2F%2Fgetclean.by&rp=%2F#%7B%22ci%22%3A5%2C%22os%22%3A1216.580000007525%7D',
  'https://www.instagram.com/p/BS1fngRFYzw/embed/captioned/?cr=1&v=7&wp=578&rd=https%3A%2F%2Fgetclean.by&rp=%2F#%7B%22ci%22%3A6%2C%22os%22%3A1466.6549998801202%7D',
  'https://www.instagram.com/p/BR_TyISlTEg/embed/captioned/?cr=1&v=7&wp=578&rd=https%3A%2F%2Fgetclean.by&rp=%2F#%7B%22ci%22%3A7%2C%22os%22%3A1586.0699999611825%7D',
  'https://www.instagram.com/p/BVH7k3jDX1o/embed/captioned/?cr=1&v=7&wp=578&rd=https%3A%2F%2Fgetclean.by&rp=%2F#%7B%22ci%22%3A8%2C%22os%22%3A1611.2649999558926%7D',
  'https://www.instagram.com/p/BSYAZ_8lKW3/embed/captioned/?cr=1&v=7&wp=578&rd=https%3A%2F%2Fgetclean.by&rp=%2F#%7B%22ci%22%3A2%2C%22os%22%3A626.4649999793619%7D',
  'https://www.instagram.com/p/BU4PBERB9ii/embed/captioned/?cr=1&v=7&wp=578&rd=https%3A%2F%2Fgetclean.by&rp=%2F#%7B%22ci%22%3A3%2C%22os%22%3A1164.5299999509007%7D',
];

type Props = {
  className?: string;
};

function ReviewSection({ className }: Props) {
  useEffect(() => {
    const swiper = new Swiper('.slider-reviews', {
      loop: true,
      spaceBetween: 20,
      navigation: {
        nextEl: '.slider__arrow-next',
        prevEl: '.slider__arrow-prev',
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
      },
    });
  }, []);

  return (
    <Section className={className}>
      <SectionTitle>Reviews</SectionTitle>
      <ReviewBlock>
        <ContentContainer>
          <ReviewBlockInner>
            <SliderContainer className="swiper-container slider-reviews">
              <SliderWrapper className="swiper-wrapper">
                {LINKS.map((link, index) => (
                  <SliderSlide key={index} className="swiper-slide">
                    <iframe src={link}></iframe>
                  </SliderSlide>
                ))}
              </SliderWrapper>
            </SliderContainer>

            <SliderArrowPrev className="slider__arrow-prev">
              <SliderArrow />
            </SliderArrowPrev>
            <SliderArrowNext className="slider__arrow-next">
              <SliderArrow />
            </SliderArrowNext>
          </ReviewBlockInner>
        </ContentContainer>
      </ReviewBlock>
    </Section>
  );
}

const ReviewBlock = styled.div`
  ${media.mobile(css`
    overflow: hidden;
  `)}
`;

const ReviewBlockInner = styled.div`
  position: relative;

  ${media.smallTablet(css`
    max-width: 720px;
    margin: 0 auto;
  `)}
`;

const SliderContainer = styled.div``;

const SliderWrapper = styled.ul``;

const SliderSlide = styled.li`
  iframe {
    display: block;
    width: 100%;
    min-height: 1245px;
    border-radius: 3px;
    border: 1px solid rgb(219, 219, 219);
  }
`;

const sliderArrowCss = css`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 19px;
  height: 18px;
  color: #c2c2c2;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 19px;
    height: 18px;
  }

  &:hover {
    svg {
      fill: ${colors.green};
    }
  }
`;

const SliderArrowNext = styled.button`
  ${sliderArrowCss};
  right: -50px;

  // ${media.tablet(css`
    //   right: -30px;
    //
  `)}

  ${media.tabletAndMobile(css`
    //top: 300px;
    right: -10px;
    z-index: 9999;
    width: 49px;
    height: 49px;
    background-color: #fff;
    border-radius: 50%;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.28);
  `)}
`;
const SliderArrowPrev = styled.button`
  ${sliderArrowCss};
  left: -50px;

  // ${media.tablet(css`
    //   left: -30px;
    //
  `)}

  ${media.tabletAndMobile(css`
    //top: 300px;
    left: -10px;
    z-index: 9999;
    width: 49px;
    height: 49px;
    background-color: #fff;
    border-radius: 50%;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.28);
  `)}

  svg {
    transform: rotate(180deg);
  }
`;

export default ReviewSection;
