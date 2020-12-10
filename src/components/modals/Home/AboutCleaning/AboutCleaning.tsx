import React from 'react';
import styled, { css } from 'styled-components';
import { colors } from '@constants/theme';
import { ReactComponent as CloseIcon } from '@assets/svg/close-popup.svg';

import {
  ModalCloseButton,
  ModalContainer,
  ModalProps,
} from '@components/Modal';
import { media } from '@utils/mixins';
import Button from '@components/Button';

import RoomsList from './components/RoomsList';

type Props = ModalProps;

function AboutCleaning({ closeModal }: Props) {
  return (
    <ModalContainer>
      <ModalCloseButton onClick={closeModal}>
        <CloseIcon />
      </ModalCloseButton>

      <CleaningListContainer>
        <MainTitle>Из чего состоит уборка GetClean ?</MainTitle>
        <RoomsList />
      </CleaningListContainer>
      {/* <BottomBlock>
        <BottomBlockText>
          Если у вас возникли дополнительные вопросы, позвоните нам по номеру
          <TelLink href="tel:+375(29)1331213">+375 (29) 133-12-13</TelLink>
        </BottomBlockText>
        <OrderButton>Заказать уборку</OrderButton>
      </BottomBlock>*/}
    </ModalContainer>
  );
}

const CleaningListContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 0 30px;
  border-radius: 5px;
  background-color: ${colors.white};
  overflow: hidden;

  ${media.mobile(css`
    padding: 0 15px;
  `)}
`;

const MainTitle = styled.span`
  display: block;
  font-size: 32px;
  line-height: 40px;
  font-weight: 500;
  margin-bottom: 20px;

  ${media.mobile(css`
    font-size: 24px;
    line-height: 30px;
  `)}
`;

const BottomBlock = styled.div`
  padding: 20px 30px;
`;

const BottomBlockText = styled.p`
  font-size: 18px;
  line-height: 28px;
  color: #565656;
  max-width: 400px;
  margin-bottom: 20px;

  ${media.mobile(css`
    font-size: 16px;
  `)}
`;

const TelLink = styled.a`
  display: inline-flex;
  margin-left: 5px;
  color: ${colors.yellowDark};
`;

const OrderButton = styled(Button)`
  display: inline-flex;
  font-size: 16px;
  line-height: 1;
  padding: 22px 45px;
  max-width: 220px;
`;

export default AboutCleaning;
