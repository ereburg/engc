import React from 'react';
import { WeekdayElementProps, LocaleUtils } from 'react-day-picker';
import styled from 'styled-components';

const WEEK_DAY_LIST = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вск'];

type Props = WeekdayElementProps;

function WeekDay({ weekday, localeUtils }: Props) {
  return (
    <StyledWeekDay>{localeUtils.formatWeekdayShort(weekday)}</StyledWeekDay>
  );
}

const StyledWeekDay = styled.div`
  display: table-cell;
  text-align: center;

  color: #88919d;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;

  padding-bottom: 20px;
`;

export default WeekDay;
