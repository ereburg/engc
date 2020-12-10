import React from 'react';
import styled, { css } from 'styled-components';

import ContentContainer from '@components/ContentContainer';
import { colors } from '@constants/theme';
import Link from '@components/Link';
import { media } from '@utils/mixins';
import { ReactComponent as LogoFooter } from '@assets/svg/logo-footer.svg';
import { ReactComponent as WorkBackground } from '@assets/svg/work-footer.svg';
import { ReactComponent as PhoneIcon } from '@assets/svg/phone-icon.svg';
import { ReactComponent as LetterIcon } from '@assets/svg/letter.svg';
import { ReactComponent as VkIcon } from '@assets/svg/vk.svg';
import { ReactComponent as FbIcon } from '@assets/svg/fb.svg';
import { ReactComponent as InstaIcon } from '@assets/svg/insta.svg';

import Messengers from '@components/Messengers';

type Props = {
  logoText?: string;
};

function Footer({ logoText }: Props) {
  return (
    <FooterContainer>
      <ContentContainer>
        <FooterInner>
          <Left>
            <LogoContainer>
              <LogoFooter />
              <LogoText>{logoText}</LogoText>
            </LogoContainer>
            <LeftText>© 2016-2020, GetClean</LeftText>
            <WorkLink href="https://getclean.by/page/work">
              <WorkBackground />
              <WorkContent>
                <WorkTop>
                  Работа в <WorkTopText>Getclean</WorkTopText>
                </WorkTop>
                <WorkMiddle>от</WorkMiddle>
                <WorkBottom>
                  800 <WorkBottomText>руб. в мес.</WorkBottomText>
                </WorkBottom>
              </WorkContent>
            </WorkLink>
          </Left>
          <Middle>
            <Menu>
              <MenuItem>
                <MenuLink href="https://getclean.by/page/about">О нас</MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink href="https://getclean.by/okna">Окна</MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink href="https://getclean.by/page/rules">
                  Правила сайта
                </MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink href="https://getclean.by/page/terms">
                  Пользовательское соглашение
                </MenuLink>
              </MenuItem>
            </Menu>
            <MiddleText>
              <TextParagraph>ООО "Гетклин"</TextParagraph>
              <TextParagraph>
                Свидетельство о государственной регистрации №192613202 от
                01.03.2016
              </TextParagraph>
              <TextParagraph>
                220073 г.Минск, ул. Скрыганова д.6, пом.19, к.5
              </TextParagraph>
              <TextParagraph>
                Тел.
                <DescTelLink href="tel:+375(29)1331213">
                  +375 (29) 133-12-13
                </DescTelLink>
                <DescMailLink href="mailto:feedback@getclean.by">
                  feedback@getclean.by
                </DescMailLink>
              </TextParagraph>
            </MiddleText>
          </Middle>
          <Right>
            <RightInfo>
              <RightInfoItem>
                <TelLink href="tel:+375(29)1331213">
                  <PhoneIcon />
                  +375 29 133 12 13
                </TelLink>
              </RightInfoItem>
              <RightInfoItem>
                <MailLink href="mailto:info@getclean.by">
                  <LetterIcon />
                  info@getclean.by
                </MailLink>
              </RightInfoItem>
            </RightInfo>
            <RightSocial>
              <SocialItem>
                <SocialLinkVk href="https://vk.com/getclean_by">
                  <VkIcon />
                  Вконтакте
                </SocialLinkVk>
              </SocialItem>
              <SocialItem>
                <SocialLinkFb href="https://www.facebook.com/getclean.by/">
                  <FbIcon />
                  Facebook
                </SocialLinkFb>
              </SocialItem>
              <SocialItem>
                <SocialLinkInsta href="https://www.instagram.com/getclean.by/">
                  <InstaIcon />
                  Instagram
                </SocialLinkInsta>
              </SocialItem>
            </RightSocial>
          </Right>
          <LeftTextMobile>© 2016-2020, GetClean</LeftTextMobile>
        </FooterInner>
      </ContentContainer>
      <Messengers />
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  padding: 60px 0 80px;
  font-size: 16px;
  line-height: 1.2;
  background-color: #2d3234;
  color: ${colors.white};

  ${media.laptop(css`
    padding: 60px 0 80px;
  `)}
  
  ${media.tablet(css`
    padding: 60px 0;
  `)}

  ${media.smallTabletAndMobile(css`
    padding: 60px 0 180px;
  `)}
  
  ${media.mobile(css`
    padding: 30px 0 120px;
  `)}
`;

const FooterInner = styled.div`
  display: flex;
  justify-content: space-between;

  ${media.smallTabletAndMobile(css`
    flex-wrap: wrap;
    justify-content: stretch;
  `)}
`;

const Left = styled.div`
  position: relative;
  width: 200px;

  ${media.smallTabletAndMobile(css`
    width: auto;
    display: flex;
    flex: 1 1 auto;
    justify-content: center;
  `)}
`;

const LogoText = styled.span`
  display: block;
  margin-left: 3px;
  font-size: 12px;
  line-height: 100%;
  text-transform: uppercase;
  color: ${colors.white};
`;

const WorkLink = styled.a`
  position: absolute;
  display: block;
  bottom: -74px;
  width: 123px;
  height: 131px;
  padding: 30px 10px 5px;
  z-index: 0;

  svg {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    transition: 0.2s ease;
  }

  &:hover {
    svg {
      fill: ${colors.yellowDark};
    }
  }

  ${media.tablet(css`
    bottom: -54px;
  `)}

  ${media.smallTabletAndMobile(css`
    bottom: -347px;
  `)}
  
  ${media.mobile(css`
    display: inline-block;
    vertical-align: top;
    padding: 10px;
    width: auto;
    height: auto;
    bottom: -247px;
    font-size: 14px;
    color: #3d3d3d;
    border-radius: 19.5px;
    background-color: #ffe16c;

    svg {
      display: none;
    }

    &:hover {
      background-color: ${colors.yellowDark};
    }
  `)}
`;

const WorkContent = styled.div`
  z-index: 1;
  text-align: center;
  color: ${colors.black};
  line-height: 1.2;
`;

const WorkTop = styled.div`
  font-size: 16px;
`;

const WorkTopText = styled.span`
  font-weight: 600;
`;

const WorkMiddle = styled.span`
  font-size: 12px;

  ${media.mobile(css`
    display: none;
  `)}
`;

const WorkBottom = styled.div`
  font-size: 24px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;

  ${media.mobile(css`
    display: none;
  `)}
`;

const WorkBottomText = styled.span`
  font-size: 10px;
  display: inline-flex;
  width: 40%;
  margin-left: 5px;
`;

const LogoContainer = styled.div`
  margin-bottom: 20px;

  ${media.tabletAndMobile(css`
    margin-bottom: 40px;
  `)}

  ${media.mobile(css`
    display: flex;
    flex-direction: column;
    align-items: center;
  `)}
`;

const LeftText = styled.span`
  font-size: 13px;

  ${media.tabletAndMobile(css`
    display: none;
  `)}
`;

const LeftTextMobile = styled.span`
  display: none;
  font-size: 13px;

  ${media.smallTabletAndMobile(css`
    display: block;
    width: 100%;
    text-align: center;
    margin-top: 40px;
  `)}
`;

const Middle = styled.div`
  display: inline-flex;
  flex-direction: column;
  padding: 0 30px;
  margin: 0 auto;
  font-size: 16px;

  ${media.tablet(css`
    font-size: 14px;
  `)}

  ${media.smallTabletAndMobile(css`
    display: none;
  `)}
`;

const Menu = styled.ul`
  display: flex;
  margin-bottom: 45px;

  ${media.tabletAndMobile(css`
    margin-bottom: 20px;
  `)}
`;

const MenuItem = styled.li`
  &:not(:last-child) {
    margin-right: 20px;
  }
`;

const MenuLink = styled.a`
  &:hover {
    text-decoration: underline;
  }
`;

const MiddleText = styled.div``;

const TextParagraph = styled.p`
  font-size: 16px;

  &:not(:last-child) {
    margin-bottom: 5px;
  }

  ${media.laptop(css`
    font-size: 14px;
  `)}

  ${media.tabletAndMobile(css`
    font-size: 12px;
  `)}
`;

const descLinkCss = css`
  display: inline-flex;
  margin: 0 3px;

  &:hover {
    text-decoration: underline;
  }
`;

const DescTelLink = styled.a`
  ${descLinkCss};
`;

const DescMailLink = styled.a`
  ${descLinkCss};
`;

const Right = styled.div`
  width: 200px;
  text-align: right;

  ${media.smallTabletAndMobile(css`
    width: auto;
    flex: 1 1 100%;
    text-align: center;
  `)}
`;

const RightInfo = styled.ul`
  margin-bottom: 30px;

  ${media.smallTabletAndMobile(css``)}
`;

const RightInfoItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

const RightSocial = styled.ul`
  width: 145px;
  margin-left: auto;

  ${media.smallTabletAndMobile(css`
    margin-left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
  `)}
`;

const SocialItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 10px;
  }

  ${media.smallTabletAndMobile(css`
    &:not(:last-child) {
      margin-bottom: 0;
      margin-right: 35px;
    }
  `)}

  ${media.mobile(css`
    &:not(:last-child) {
      margin-right: 10px;
    }
  `)}
`;

const socialLinkCss = css`
  position: relative;
  display: block;
  padding: 12px 18px 12px 57px;
  font-size: 14px;
  line-height: 16px;
  border-radius: 19.5px;

  svg {
    position: absolute;
    left: 18px;
    top: 50%;
    transform: translateY(-50%);
  }

  ${media.mobile(css`
    padding: 0;
    width: 40px;
    height: 40px;
    font-size: 0;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  `)}
`;

const SocialLinkVk = styled.a`
  ${socialLinkCss};
  color: ${colors.white};
  background-color: #3f82b2;

  &:hover {
    background-color: #38749f;
  }
`;

const SocialLinkFb = styled.a`
  ${socialLinkCss};
  color: ${colors.white};
  background-color: #345aab;

  &:hover {
    background-color: #2e5097;
  }
`;

const SocialLinkInsta = styled.a`
  ${socialLinkCss};
  color: #0d0d0d;
  background-color: #e4e4e4;

  &:hover {
    background-color: #d7d7d7;
  }
`;

const TelLink = styled.a`
  position: relative;
  padding-left: 20px;
  display: inline-block;
  vertical-align: top;
  font-size: 16px;
  font-weight: bold;
  color: ${colors.yellow};

  svg {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    fill: currentColor;
    
  &:hover {
    opacity: 0.8;
    text-decoration: underline;
  }
`;

const MailLink = styled.a`
  position: relative;
  padding-left: 30px;
  display: inline-block;
  vertical-align: top;
  font-size: 13px;

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

  ${media.tabletAndMobile(css`
    font-size: 12px;
  `)}
`;

export default Footer;
