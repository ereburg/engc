import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

import ContentContainer from '@components/ContentContainer';
import { colors } from '@constants/theme';
import { ReactComponent as LogoMain } from '@assets/svg/logo-main.svg';
import { media } from '@utils/mixins';
import Link from '@components/Link';

type Props = {
  logoText?: string;
  className?: string;
  isOrderPage?: boolean;
};

function Header({ logoText, className, isOrderPage }: Props) {
  const [isFixed, setFixed] = useState(false);

  useEffect(() => {
    function listener(this: Document, event: Event) {
      const INITIAL_OFFSET = 1;

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
    <HeaderContainer
      className={className}
      isFixed={isFixed}
      isOrderPage={isOrderPage}
    >
      <HeaderTop>
        <ContentContainer>
          <HeaderInner>
            <HeaderLeft>
              <Link to="/">
                <LogoContainer data-logo>
                  <LogoMain />
                  <LogoText>{logoText}</LogoText>
                </LogoContainer>
              </Link>
            </HeaderLeft>
          </HeaderInner>
        </ContentContainer>
      </HeaderTop>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header<{
  isFixed: boolean;
  isOrderPage?: boolean;
}>`
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
  background-color: transparent;
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.08);
  transition: 0.3s ease;

  ${props =>
    props.isFixed
      ? css`
          position: fixed;
          padding: 10px 0;
          background-color: ${colors.white};
          box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);
        `
      : css`
          position: absolute;
          padding: 20px 0;

          ${media.tabletAndMobile(css`
            &::before {
              content: '';
              position: absolute;
              display: block;
              bottom: 0;
              left: 20px;
              width: calc(100vw - 40px);
              height: 1px;
              margin: 0 auto;
              background-color: #5ae4a8;
            }

            svg {
              color: ${props.isOrderPage ? colors.green : colors.white};

              path {
                fill: currentColor;
              }
            }
          `)};
        `};
`;

const HeaderTop = styled.div``;

const HeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${media.tabletAndMobile(css`
    justify-content: center;
  `)}
`;

const HeaderLeft = styled.div``;

const LogoContainer = styled.div`
  color: ${colors.green};
  min-height: 40px;
  display: flex;
  align-items: center;

  ${media.tabletAndMobile(css`
    display: flex;
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

export default Header;
