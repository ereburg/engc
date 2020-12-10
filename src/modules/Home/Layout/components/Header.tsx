import React, { useEffect, useRef, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';

import ContentContainer from '@components/ContentContainer';
import { colors } from '@constants/theme';
import { ReactComponent as LogoMain } from '@assets/svg/logo-main.svg';
import { ReactComponent as BurgerIcon } from '@assets/svg/burger.svg';
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
    <HeaderContainer>
      <ContentContainer>
        <HeaderInner>
          {/*<MobileMenu>*/}
          {/*  <BurgerIcon />*/}
          {/*</MobileMenu>*/}
          <HeaderLeft>
            <LogoContainer>
              <LogoLink href="#">
                <LogoMain />
              </LogoLink>
            </LogoContainer>
          </HeaderLeft>
          {/*<HeaderRight></HeaderRight>*/}
        </HeaderInner>
      </ContentContainer>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
  background-color: transparent;
`;

const HeaderInner = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 20px 0;
  
  ${media.tabletAndMobile(css`
    justify-content: center;
  `)}
  

  ${media.tablet(css`
    max-width: 680px;
    margin: 0 auto;
    border-bottom: 1px solid #5ae4a8;
  `)}

  ${media.mobile(css`
    border-bottom: 1px solid #5ae4a8;
  `)}
`;

const MobileMenu = styled.div`
  display: none;
  color: ${colors.white};

  svg path {
    fill: currentColor;
  }

  ${media.tabletAndMobile(css`
    display: block;
  `)}
`;

const HeaderLeft = styled.div``;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  height: 40px;

  ${media.smallTabletAndMobile(css`
    //width: 100px;
  `)}
`;

const LogoLink = styled.a`
  display: block;
  color: ${colors.green};

  ${media.tabletAndMobile(css`
    svg path {
      fill: white;
    }
  `)}

  ${media.mobile(css`
    svg {
      width: 120px;
      height: auto;
    }
  `)}
`;

const HeaderRight = styled.div`
  flex: 1 1 1;
  display: flex;
  align-items: center;
`;

export default Header;
