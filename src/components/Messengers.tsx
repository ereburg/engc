import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import { ReactComponent as ChatIcon } from '@assets/svg/chat.svg';
import { ReactComponent as ChatIconClose } from '@assets/svg/close-icon.svg';
import { ReactComponent as TmIcon } from '@assets/svg/telegram.svg';
import { ReactComponent as ViberIcon } from '@assets/svg/viber.svg';
import { ReactComponent as WhatsappIcon } from '@assets/svg/whatsapp.svg';
import { ReactComponent as MessengerIcon } from '@assets/svg/messenger.svg';

import { colors } from '@constants/theme';

function Messengers() {
  const [isHidden, setHidden] = useState(true);

  function toggleHidden() {
    setHidden(prev => !prev);
  }

  return (
    <MessengersBlock>
      <MessengersInner>
        <Header>
          {isHidden ? (
            <MainButton onClick={toggleHidden}>
              <ChatIcon />
            </MainButton>
          ) : (
            <MainButtonOpened onClick={toggleHidden}>
              <ChatIconClose />
            </MainButtonOpened>
          )}
        </Header>
        <Body hidden={isHidden}>
          <MessengerItem>
            <TelegramLink href="tg://resolve?domain=getcleanby">
              <TmIcon />
            </TelegramLink>
          </MessengerItem>
          <MessengerItem>
            <ViberLink href="viber://chat?number=+375291332286">
              <ViberIcon />
            </ViberLink>
          </MessengerItem>
          <MessengerItem>
            <WhatsappLink href="whatsapp://send?phone=+375291332286">
              <WhatsappIcon />
            </WhatsappLink>
          </MessengerItem>
          <MessengerItem>
            <MessengerLink href="https://www.messenger.com/t/getclean.by">
              <MessengerIcon />
            </MessengerLink>
          </MessengerItem>
        </Body>
      </MessengersInner>
    </MessengersBlock>
  );
}

const MessengersBlock = styled.div`
  position: fixed;
  bottom: 28px;
  right: 28px;
  z-index: 30;
`;

const MessengersInner = styled.div`
  position: relative;
`;

const Header = styled.div``;

const mainButtonCss = css`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;

const MainButton = styled.button`
  ${mainButtonCss};
  background-color: ${colors.green};
  box-shadow: 0 2px 10px 0 transparent;
`;

const MainButtonOpened = styled.button`
  ${mainButtonCss};
  background-color: ${colors.white};
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.5);
`;

const Body = styled.div`
  position: absolute;
  bottom: calc(100% + 20px);
  left: 50%;
  transform: translateX(-50%);
  animation: hidden 1s ease;

  @keyframes hidden {
    from {
      opacity: 0;
      visibility: hidden;
    }

    to {
      opacity: 1;
      visibility: visible;
    }
  }
`;

const MessengerItem = styled.div`
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

const messengerLinkCss = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: 0 2px 10px 0 transparent, 0 2px 15px 0 rgba(0, 0, 0, 0.25);

  &:hover {
    transform: scale(1.1);
  }
`;

const TelegramLink = styled.a`
  ${messengerLinkCss};
  background-color: #33b1e1;
`;

const ViberLink = styled.a`
  ${messengerLinkCss};
  background-color: #665cac;
`;

const WhatsappLink = styled.a`
  ${messengerLinkCss};
  background-color: #02d051;
`;

const MessengerLink = styled.a`
  ${messengerLinkCss};
  background-color: #0084ff;
`;

export default Messengers;
