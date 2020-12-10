import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import { colors } from '@constants/theme';
import { media } from '@utils/mixins';
import { ReactComponent as Arrow } from '@assets/svg/arrow-down.svg';
import { ReactComponent as Dots } from '@assets/svg/answer-dots.svg';

type Props = {
  accordItem: {
    title: string;
    text: React.ReactNode;
  };
};

function QaAccord({ accordItem }: Props) {
  const [isOpened, setOpened] = useState(false);

  function toggleOpened() {
    setOpened(opened => !opened);
  }

  const { title, text } = accordItem;
  return (
    <AccordContainer>
      <AccordHeader onClick={toggleOpened} isOpened={isOpened}>
        <AccordTitle isOpened={isOpened}>{title}</AccordTitle>
        <Arrow />
      </AccordHeader>
      <AccordContent isOpened={isOpened}>
        <ContentText>
          <Dots />
          {text}
        </ContentText>
      </AccordContent>
    </AccordContainer>
  );
}

const AccordContainer = styled.div`
  border-bottom: 1px solid #dadcda;
`;

const AccordHeader = styled.div<{ isOpened: boolean }>`
  padding: 20px 40px 20px 0;
  cursor: pointer;
  position: relative;

  svg {
    position: absolute;
    top: 30px;
    right: 0;
    width: 28px;
    height: 16px;
    transform: ${props => (props.isOpened ? `rotate(180deg)` : `rotate(0)`)};
    transition: 0.35s ease;
  }

  ${media.mobile(css`
    cursor: auto;
  `)}
`;

const AccordTitle = styled.span<{ isOpened: boolean }>`
  display: inline-flex;
  font-size: 26px;
  line-height: 36px;
  color: ${props => (props.isOpened ? colors.black : colors.green)};
  font-weight: 500;
  transition: color 0.5s ease;

  ${media.smallTabletAndMobile(css`
    font-size: 20px;
    line-height: 30px;
  `)}
`;

const AccordContent = styled.div<{ isOpened: boolean }>`
  position: relative;
  ${props =>
    props.isOpened
      ? css`
          max-height: 700px;
          visibility: visible;
          opacity: 1;
        `
      : css`
          max-height: 0;
          visibility: hidden;
          opacity: 0;
        `};
  transition: 0.5s ease-out;

  svg {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;

    ${media.mobile(css`
      display: none;
    `)}
  }
`;

const ContentText = styled.p`
  padding: 10px 40px 30px;
  margin: 0;
  font-size: 17px;
  line-height: 30px;
  max-width: 700px;

  a {
    color: ${colors.green};
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }
  }

  ${media.smallTabletAndMobile(css`
    font-size: 16px;
    line-height: 24px;
  `)}

  ${media.mobile(css`
    padding-left: 0;
  `)}
`;

export default QaAccord;
