import React from 'react';
import { CaptionElementProps } from 'react-day-picker';

import * as S from './Caption.style';

type Props = CaptionElementProps;

function Caption({ date, localeUtils }: Props) {
  return (
    <S.CaptionContainer>
      {localeUtils.formatMonthTitle(date)}
    </S.CaptionContainer>
  );
}

export default Caption;
