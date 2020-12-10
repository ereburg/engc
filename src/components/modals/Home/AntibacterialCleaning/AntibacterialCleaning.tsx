import React from 'react';
import styled, { css } from 'styled-components';
import { colors } from '@constants/theme';
import { ReactComponent as CloseIcon } from '@assets/svg/icon-close.svg';
import Image from '@components/Image';
import cleanerImg from '@assets/images/home/cleaner.png';
import CalculatorForm from './components/FormAntibacterial';

import {
  ModalCloseButton,
  ModalContainer,
  ModalProps,
} from '@components/Modal';
import { media } from '@utils/mixins';
import Button from '@components/Button';

type Props = ModalProps;

function AntibacterialCleaning({ closeModal }: Props) {
  return (
    <ModalContainer
      width={900}
      bgColor={'linear-gradient(164deg, #0df 20%, #0090f3 100%)'}
      padding={'30px 30px 0'}
    >
      <ModalCloseButton onClick={closeModal}>
        <CloseIcon />
      </ModalCloseButton>

      <MainContainer>
        <LeftSide>
          <MainImg src={cleanerImg} />
        </LeftSide>
        <RightSide>
          <MainTitle>Antibacterial cleaning</MainTitle>
          <MainInfo>
            We will disinfect all the places where bacteria may spread in a
            domestic environment
          </MainInfo>
          <CalculatorForm />
        </RightSide>
      </MainContainer>
    </ModalContainer>
  );
}

const MainContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  padding: 0 30px;
  border-radius: 5px;
  overflow: hidden;

  ${media.smallTabletAndMobile(css`
    padding: 20px 0 0;
  `)}
`;

const LeftSide = styled.div`
  display: flex;
  align-items: flex-end;

  ${media.smallTabletAndMobile(css`
    display: none;
  `)}
`;

const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 40px;
  max-width: 604px;
  color: ${colors.white};
`;

const MainImg = styled(Image)``;

const MainTitle = styled.span`
  display: block;
  font-weight: 900;
  line-height: 70px;
  font-size: 60px;
  text-transform: uppercase;
  margin-bottom: 20px;

  ${media.smallTabletAndMobile(css`
    font-size: 35px;
    line-height: 40px;
    text-align: center;
  `)}
`;

const MainInfo = styled.p`
  font-size: 22px;
  ${media.smallTabletAndMobile(css`
    font-size: 18px;
  `)}
`;

export default AntibacterialCleaning;
