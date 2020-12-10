import React from 'react';
import styled, { css } from 'styled-components';

import { colors } from '@constants/theme';
import imageSrc from '@assets/images/hero/home-bg.jpg';
import imageSrcWebp from '@assets/images/hero/home-bg.webp';
import { ReactComponent as ScrollDownIcon } from '@assets/svg/scrolldown.svg';
import ContentContainer from '@components/ContentContainer';
import { media } from '@utils/mixins';

import CalculatorForm from './CalculatorForm';

function Hero() {
  function handleButtonClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    const el = document.getElementById('hero');
    let targetPos;
    const addsBlock = 0;

    if (el !== null) {
      targetPos = window.pageYOffset + el.getBoundingClientRect().bottom - 60;
    }

    window.scrollTo({
      top: targetPos,
      behavior: 'smooth',
    });
  }

  return (
    <HeroContainer id={'hero'}>
      <Background>
        <picture>
          <source type="image/webp" srcSet={imageSrcWebp} />
          <img src={imageSrc} alt="" />
        </picture>
      </Background>
      <ContentContainer>
        <HeroInner>
          <Intro>
            <Title>
              Antibacterial cleaning of{' '}
              <TitleLineColored>your place</TitleLineColored>
            </Title>
            <Subtitle>
              We will disinfect all the places where bacteria may spread in a
              domestic environment
            </Subtitle>
          </Intro>
          <FormContainer>
            <FormTitle>Describe your place</FormTitle>
            <CalculatorForm />
            <FormRemark>
              Antibacterial cleaning of your place, including kitchen, toilet
              and bathroom
            </FormRemark>
          </FormContainer>
        </HeroInner>
      </ContentContainer>
      <ScrollDownButton onClick={handleButtonClick}>
        <ScrollDownIcon />
      </ScrollDownButton>
    </HeroContainer>
  );
}

const HeroContainer = styled.div`
  position: relative;
  padding-top: 80px;
  padding-bottom: 80px;
  width: 100%;
  min-height: 100vh;
  z-index: 0;
  display: flex;
  align-items: center;

  ${media.tabletAndMobile(css`
    padding: 105px 0;
    background-color: ${colors.green};
    align-items: normal;
  `)}
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;

  img {
    width: 100%;
    height: 100%;
    z-index: -1;
    object-fit: cover;
  }

  ${media.tabletAndMobile(css`
    display: none;
  `)}
`;

const HeroInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${media.tabletAndMobile(css`
    justify-content: normal;
    align-items: center;
    flex-direction: column;
  `)}
`;

const FormContainer = styled.div`
  flex: 0 0 470px;
  margin-left: 50px;
  padding: 50px 85px;
  background-color: ${colors.white};
  border-radius: 10px;
  overflow: hidden;

  ${media.laptopAndTablet(css`
    flex: 0 0 420px;
    padding: 50px;
  `)}

  ${media.tabletAndMobile(css`
    flex: 0;
    max-width: 296px;
    width: 100%;
    margin: 0 auto;
    padding: 0;
    background-color: transparent;
    border-radius: 0;
  `)}
`;

const FormTitle = styled.span`
  display: block;
  text-align: center;
  margin: 0 -20px 25px;
  font-size: 28px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.7px;

  ${media.tabletAndMobile(css`
    display: none;
  `)}
`;

const FormRemark = styled.span`
  display: block;
  margin-top: 22px;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  letter-spacing: -0.4px;
  color: #88919d;
  font-weight: 500;

  ${media.tabletAndMobile(css`
    color: ${colors.white};
  `)}

  ${media.mobile(css`
    font-size: 14px;
  `)}
`;

const Intro = styled.div`
  max-width: 600px;

  ${media.tabletAndMobile(css`
    max-width: 510px;
    margin: 0 auto 30px;
    text-align: center;
  `)}
`;

const Title = styled.h1`
  margin: 0 0 50px;
  font-size: 72px;
  font-weight: 900;
  line-height: 75px;
  color: ${colors.blackText};
  letter-spacing: -1.7px;
  max-width: 470px;

  ${media.tabletAndMobile(css`
    margin: 0 auto 40px;
    color: ${colors.white};
  `)}
  
  ${media.tablet(css`
    font-size: 48px;
    line-height: 55px;
  `)}
  
  ${media.mobile(css`
    font-size: 36px;
    line-height: 40px;
    margin-bottom: 15px;
  `)}
`;

const TitleLineColored = styled.span`
  ${media.laptopAndDesktop(css`
    display: block;
    color: ${colors.green};
  `)}
`;

const Subtitle = styled.p`
  font-size: 22px;
  line-height: 40px;
  color: ${colors.blackText};
  font-weight: 500;
  letter-spacing: -0.5px;

  ${media.tablet(css`
    font-size: 18px;
    line-height: 32px;
    color: ${colors.white};
  `)}

  ${media.mobile(css`
    font-size: 14px;
    line-height: 24px;
    color: ${colors.white};
  `)}
`;

const SubtitleLink = styled.a`
  display: inline-flex;

  &:hover {
    text-decoration: underline;
  }
`;

const ScrollDownButton = styled.button`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  z-index: 10;
  border-radius: 100%;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.5);
  background-color: ${colors.white};
`;

export default Hero;
