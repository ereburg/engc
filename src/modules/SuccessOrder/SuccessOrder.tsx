import React from 'react';
import styled, { css } from 'styled-components';

import { colors } from '@constants/theme';
import { ButtonLink } from '@components/Button';
import { ReactComponent as Success } from '@assets/svg/success.svg';
import ContentContainer from '@components/ContentContainer';
import { media } from '@utils/mixins';
import Link from '@components/Link';

function SuccessOrder() {
  return (
    <Wrapper>
      <ContentContainer>
        <Inner data-testid="success-page">
          <SuccessIcon>
            <Success />
          </SuccessIcon>
          <Title>Your order is accepted!</Title>
          <Text>
            Our operator will contact you shortly for further details.
          </Text>
          <Link as={ToHomeLink} to="/">
            Go to main page
          </Link>
        </Inner>
      </ContentContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-top: 85px;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ebedf4;
  border-bottom: 1px solid #d7d7d7;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  color: ${colors.darkText};

  ${media.laptop(css``)}
  ${media.tablet(css``)}
  ${media.mobile(css``)}
`;

const SuccessIcon = styled.div`
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 137px;
  height: 137px;
  background-color: #393b41;
  border-radius: 50%;

  ${media.tablet(css`
    width: 120px;
    height: 120px;
    margin-bottom: 25px;

    svg {
      width: 62px;
      height: 47px;
    }
  `)}

  ${media.mobile(css`
    width: 100px;
    height: 100px;
    margin-bottom: 20px;

    svg {
      width: 50px;
      height: 38px;
    }
  `)}
`;

const textCss = css`
  display: block;
  max-width: 100%;
  margin-bottom: 30px;
  line-height: 1.2;

  ${media.tablet(css`
    margin-bottom: 25px;
  `)}

  ${media.mobile(css`
    margin-bottom: 20px;
  `)}
`;

const Title = styled.span`
  ${textCss};
  font-size: 48px;
  
  ${media.laptop(css`
    font-size: 40px;
  `)}
  
  ${media.tablet(css`
    font-size: 36px;
  `)}
  
  ${media.mobile(css`
    font-size: 32px;
  `)}
`;

const Text = styled.p`
  ${textCss};
  font-size: 24px;
  font-weight: 300;
  
  ${media.laptop(css`
    font-size: 22px;
  `)}
  
  ${media.tablet(css`
    font-size: 20px;
  `)}
  
  ${media.mobile(css`
    font-size: 18px;
  `)}
`;

const ToHomeLink = styled(ButtonLink)`
  padding: 31px;
  font-size: 26px;
  font-weight: 400;
  
  ${media.laptop(css`
    font-size: 24px;
  `)}
  
  ${media.tablet(css`
    font-size: 22px;
    padding: 28px;
  `)}
  
  ${media.mobile(css`
    padding: 25px;
    font-size: 20px;
  `)}
`;

export default SuccessOrder;
