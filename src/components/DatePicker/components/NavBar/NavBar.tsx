import React from 'react';
import { NavbarElementProps } from 'react-day-picker';

import { ReactComponent as ArrowIcon } from '@assets/svg/chevron-left.svg';

import * as S from './NavBar.style';

type Props = NavbarElementProps;

function NavBar({
  onPreviousClick,
  onNextClick,
  showNextButton,
  showPreviousButton,
}: Props) {
  console.log({ showNextButton, showPreviousButton });
  return (
    <S.NavBar>
      <S.Button
        data-test-id="calendarPrevMonthButton"
        type="button"
        onClick={() => onPreviousClick()}
        left
        hidden={!showPreviousButton}
        disabled={!showPreviousButton}
      >
        <ArrowIcon />
      </S.Button>
      <S.Button
        data-test-id="calendarNextMonthButton"
        type="button"
        onClick={() => onNextClick()}
        right
        hidden={!showNextButton}
        disabled={!showNextButton}
      >
        <ArrowIcon />
      </S.Button>
    </S.NavBar>
  );
}

export default NavBar;
