import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';

import { colors } from '@constants/theme';
import { media } from '@utils/mixins';

import Image from '@components/Image';
import imageArrowDown from '@assets/svg/arrow-down.svg';
import imageAnswerDots from '@assets/svg/answer-dots.svg';

type Props = {
  accordionItem: {
    titleQA: string;
    contentQA: string;
  };
};

function Accordion({ accordionItem }: Props) {
  const { titleQA, contentQA } = accordionItem;

  const [isActive, setActive] = useState(false);

  function toggleAccordion() {
    setActive(prev => !prev);
  }

  return (
    <QaItem className={`${setActive}`} onClick={toggleAccordion}>
      <QaItemQuestion>
        <p>{titleQA}</p>
        <DropDownImage src={imageArrowDown} />
      </QaItemQuestion>
      <QaItemAnswer>
        <AnswerDotsImage src={imageAnswerDots} />
        <p>{contentQA}</p>
      </QaItemAnswer>
    </QaItem>
  );
}

const QaItem = styled.li`
  border-bottom: 1px solid #dadcda;
`;

const DropDownImage = styled(Image)`
  position: absolute;
  right: 0;
  top: 30px;
  transition: 0.3s;

  .active & {
    transform: rotate(180deg);
  }
`;

const AnswerDotsImage = styled(Image)`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);

  ${media.mobile(css`
    display: none;
  `)}
`;

const QaItemQuestion = styled.div`
  position: relative;
  padding: 20px 40px 20px 0;
  font-size: 26px;
  line-height: 36px;
  color: #12cf7c;
  font-weight: 500;
  font-style: normal;
  cursor: pointer;

  .active & {
    color: ${colors.blackText};
  }

  ${media.mobile(css`
    font-size: 20px;
    line-height: 30px;
  `)}
`;

const QaItemAnswer = styled.div`
  position: relative;
  display: none;
  max-width: 700px;
  padding: 10px 40px 30px;
  font-size: 17px;
  line-height: 30px;

  .active & {
    display: block;
  }

  a {
    color: ${colors.green};
  }

  ${media.mobile(css`
    font-size: 16px;
    line-height: 24px;
    padding-left: 0;
  `)}
`;

export default Accordion;
