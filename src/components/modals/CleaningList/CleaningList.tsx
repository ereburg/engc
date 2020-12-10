import React from 'react';
import styled, { css } from 'styled-components';
import { colors } from '@constants/theme';
import { ReactComponent as CloseIcon } from '@assets/svg/close-popup.svg';
import { ReactComponent as KitchenIcon } from '@assets/svg/kitchen.svg';
import { ReactComponent as BathIcon } from '@assets/svg/bath.svg';
import { ReactComponent as ApartmentIcon } from '@assets/svg/appartment.svg';
import {
  ModalCloseButton,
  ModalContainer,
  ModalInner,
  ModalProps,
} from '@components/Modal';
import { media } from '@utils/mixins';
import Button from '@components/Button';

type Props = ModalProps;

function CleaningList({ closeModal }: Props) {
  function handleClose() {
    closeModal();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  return (
    <ModalContainer>
      <ModalCloseButton onClick={closeModal}>
        <CloseIcon />
      </ModalCloseButton>
      <ModalInner>
        <CleaningListContainer>
          <MainTitle>Что входит в уборку:</MainTitle>
          <InnerList>
            <InnerItem>
              <ItemIcon>
                <KitchenIcon />
              </ItemIcon>
              <ItemTitle>На кухне:</ItemTitle>
              <SubList>
                <SubItem>
                  Вымоем пол, плинтусы, подоконники, батареи, шкафы, технику
                </SubItem>
                <SubItem>Очищаем от пыли все поверхности</SubItem>
                <SubItem>Удаляем пятна от краски, клея и прочего</SubItem>
                <SubItem>Собираем и выносим негабаритный мусор</SubItem>
              </SubList>
            </InnerItem>
            <InnerItem>
              <ItemIcon>
                <BathIcon />
              </ItemIcon>
              <ItemTitle>В ванной комнате:</ItemTitle>
              <SubList>
                <SubItem>
                  Очищаем от пыли все поверхности, кроме потолка
                </SubItem>
                <SubItem>
                  Моем полы, плитку, сантехнику, ванную и унитаз, чистим зеркала
                </SubItem>
                <SubItem>Удаляем пятна от краски, клея и прочих смесей</SubItem>
                <SubItem>Собираем и выносим негабаритный мусор</SubItem>
              </SubList>
            </InnerItem>
            <InnerItem>
              <ItemIcon>
                <ApartmentIcon />
              </ItemIcon>
              <ItemTitle>В жилых помещениях:</ItemTitle>
              <SubList>
                <SubItem>
                  Вымоем пол, плинтусы, подоконники, батареи, шкафы, технику
                </SubItem>
                <SubItem>
                  Очищаем от пыли все поверхности, кроме потолка
                </SubItem>
                <SubItem>Удаляем пятна от краски, клея и прочего</SubItem>
                <SubItem>Собираем и выносим негабаритный мусор</SubItem>
                <SubItem>Моем окна и рамы</SubItem>
              </SubList>
            </InnerItem>
          </InnerList>
        </CleaningListContainer>
        <BottomBlock>
          <BottomBlockText>
            Если у вас возникли дополнительные вопросы, позвоните нам по номеру
            <TelLink href="tel:+375(29)1331213">+375 (29) 133-12-13</TelLink>
          </BottomBlockText>
          <OrderButton onClick={handleClose}>Заказать уборку</OrderButton>
        </BottomBlock>
      </ModalInner>
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

const InnerList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const InnerItem = styled.li`
  width: 50%;
  padding: 15px;

  ${media.mobile(css`
    width: 100%;
  `)}
`;

const ItemIcon = styled.div`
  display: inline-flex;
  align-items: flex-end;
  height: 65px;
  margin-bottom: 30px;
  color: ${colors.yellowDark};
`;

const ItemTitle = styled.span`
  display: block;
  margin-bottom: 30px;
  font-size: 18px;
  line-height: 24px;
  font-weight: bold;
`;

const SubList = styled.ul``;

const SubItem = styled.li`
  position: relative;
  padding-left: 30px;
  margin-bottom: 10px;
  font-size: 16px;
  line-height: 24px;

  &:before {
    content: '';
    position: absolute;
    top: 9px;
    left: 0;
    width: 5px;
    height: 5px;
    background-color: ${colors.blackText};
    border-radius: 100%;
  }

  ${media.mobile(css`
    font-size: 14px;
  `)}
`;

const BottomBlock = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  right: 0;
  bottom: 0;
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

export default CleaningList;
