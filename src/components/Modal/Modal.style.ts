import styled, { css } from 'styled-components';
import { colors } from '@constants/theme';
import { media } from '@utils/mixins';

export const ModalOverlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
  ${props =>
    !props.isOpen
      ? css`
          display: none;
        `
      : ''}
`;

export const ModalContainer = styled.div<{
  width?: number;
  bgColor?: string;
  padding?: string;
}>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: ${props => props.width || 780}px;
  width: 100%;
  border-radius: 5px;
  background: ${props => props.bgColor || '#ffffff'};
  padding: ${props => props.padding || '40px 0 196px'};
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
  max-height: calc(100vh - 100px);

  ${media.smallTabletAndMobile(css`
    max-width: 95%;
    width: 412px;
  `)}
`;

export const ModalInner = styled.div`
  width: 100%;
  overflow-y: auto;
  padding-right: 10px;
  max-height: calc(100vh - 340px);
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: ${colors.white};
  background-color: transparent;
  transition: 0.3s ease;

  svg {
    width: 25px;
    height: 25px;

    ${media.smallTabletAndMobile(css`
      width: 12px;
      height: 12px;
    `)}
  }

  &:hover {
    background-color: #fafafa;
    color: ${colors.green};
  }
`;
