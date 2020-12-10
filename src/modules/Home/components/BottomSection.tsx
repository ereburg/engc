import React from 'react';
import styled, { css } from 'styled-components';

import ContentContainer from '@components/ContentContainer';
import bottomImage from '@assets/images/home/bottom.png';
import bottomImageWebp from '@assets/images/home/bottom.webp';
import { media } from '@utils/mixins';
import Image from '@components/Image';

import { colors } from '@constants/theme';

import CalculatorForm from './CalculatorForm';

function BottomSection() {
  return (
    <Section>
      <ContentContainer>
        <SectionInner>
          <BottomImgContainer>
            <picture>
              <source type="image/webp" srcSet={bottomImageWebp} />
              <StyledImage src={bottomImage} />
            </picture>
          </BottomImgContainer>
          <TextContainer>
            <BottomTextTitle>
              Order cleaning
              <span> and enjoy life </span>
            </BottomTextTitle>

            <BottomTextInfo>
              <span>For $199</span> we will thoroughly clean and disinfect your
              place
            </BottomTextInfo>
          </TextContainer>
          <FormContainer>
            <CalculatorForm />
          </FormContainer>
        </SectionInner>
      </ContentContainer>
    </Section>
  );
}

const Section = styled.section`
  padding: 0;

  ${media.tabletAndMobile(css`
    padding: 60px 0 0;
  `)}

  ${media.mobile(css`
    padding-bottom: 40px;
  `)}
`;

const SectionInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 470px;
  overflow: hidden;

  ${media.tabletAndMobile(css`
    flex-direction: column;
    max-height: initial;
    max-width: 505px;
    margin: 0 auto;
  `)}
`;

const TextContainer = styled.div`
  max-width: 400px;

  ${media.tabletAndMobile(css`
    margin-bottom: 50px;
    text-align: center;
  `)}
`;

const BottomTextTitle = styled.h2`
  font-size: 48px;
  line-height: 51px;
  margin-bottom: 35px;
  font-weight: 900;
  font-style: normal;
  color: #383838;

  span {
    display: block;
    color: #12cf7c;
  }

  ${media.tabletAndMobile(css`
    text-align: center;
  `)}

  ${media.mobile(css`
    font-size: 36px;
    line-height: 40px;
  `)}
`;

const BottomTextInfo = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.4px;
  color: #88919d;

  span {
    color: #12cf7c;
  }

  ${media.mobile(css`
    font-size: 14px;
    line-height: 21px;
  `)}
`;

const BottomImgContainer = styled.div`
  ${media.tabletAndMobile(css`
    order: 3;
    max-width: 250px;
    max-height: 350px;
    overflow: hidden;
  `)}

  ${media.mobile(css`
    display: none;
  `)}
`;

const StyledImage = styled(Image)`
  position: relative;
  top: 50px;
  width: 100%;
  height: auto;

  ${media.tabletAndMobile(css`
    top: 20px;
  `)}
`;

const BottomImage = styled.img`
  position: relative;
  top: 50px;
  width: 100%;
  height: auto;

  ${media.tabletAndMobile(css`
    top: 20px;
  `)}
`;

const FormContainer = styled.div`
  width: 296px;
`;

export default BottomSection;
