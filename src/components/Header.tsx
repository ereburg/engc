import React, { useEffect, useRef, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';

import ContentContainer from '@components/ContentContainer';
import { colors } from '@constants/theme';
import { ReactComponent as LogoMain } from '@assets/svg/logo-main.svg';
import { ReactComponent as PhoneIcon } from '@assets/svg/phone-icon.svg';
import { media } from '@utils/mixins';

type Props = {
  logoText?: string;
  className?: string;
};

function Header({ logoText, className }: Props) {
  const [isFixed, setFixed] = useState(false);

  useEffect(() => {
    function listener(this: Document, event: Event) {
      const INITIAL_OFFSET = window.innerHeight;

      if (INITIAL_OFFSET < window.pageYOffset && !isFixed) {
        setFixed(true);
      }

      if (INITIAL_OFFSET >= window.pageYOffset && isFixed) {
        setFixed(false);
      }
    }

    document.addEventListener('scroll', listener);

    return () => document.removeEventListener('scroll', listener);
  }, [isFixed]);

  return (
    <HeaderContainer className={className} isFixed={isFixed}>
      <HeaderTop>
        <ContentContainer>
          <HeaderInner>
            <HeaderLeft>
              <LogoContainer data-logo>
                <LogoMain />
                <LogoText>{logoText}</LogoText>
              </LogoContainer>
            </HeaderLeft>
            <HeaderRight>
              <HeaderPhoneLink href="tel:+375(29)1331213" data-phone-link>
                <PhoneIcon />
                +375 (29) 133-12-13
              </HeaderPhoneLink>
            </HeaderRight>
          </HeaderInner>
        </ContentContainer>
      </HeaderTop>
    </HeaderContainer>
  );
}

const fadeUp = keyframes`
  from {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-100%);
  }

  to {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
`;

const HeaderContainer = styled.header<{ isFixed: boolean }>`
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
  background-color: ${colors.white};
  transition: 0.2s ease;

  ${props =>
    props.isFixed
      ? css`
          position: fixed;
          animation: ${fadeUp} 0.7s ease;
        `
      : css`
          position: absolute;
        `};
`;

const HeaderTop = styled.div`
  border-bottom: 1px solid #d7d7d7;
`;

const HeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;

  ${media.smallTabletAndMobile(css`
    justify-content: center;
    padding: 10px;
  `)}
`;

const HeaderLeft = styled.div``;

const LogoContainer = styled.div`
  ${media.smallTabletAndMobile(css`
    display: flex;
    flex-direction: column;
    align-items: center;

    svg {
      width: 120px;
      height: auto;
    }
  `)}
`;

const LogoText = styled.span`
  display: block;
  margin-top: 5px;
  font-size: 12px;
  line-height: 100%;
  text-transform: uppercase;
  color: ${colors.blueDark};
  white-space: nowrap;
`;

const HeaderRight = styled.div`
  display: flex;

  ${media.smallTabletAndMobile(css`
    display: none;
  `)}
`;

const HeaderPhoneLink = styled.a`
  position: relative;
  padding-left: 20px;
  display: block;
  margin-right: 20px;
  font-size: 16px;
  line-height: 20px;

  svg {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    fill: currentColor;
  }

  &:hover {
    opacity: 0.8;
    text-decoration: underline;
  }
`;

export default Header;
