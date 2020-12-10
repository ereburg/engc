import React, { useEffect, useState } from 'react';
import DayPicker, {
  CaptionElementProps,
  DayModifiers,
  DayPickerProps,
  Modifiers,
} from 'react-day-picker';

import NavBar from '../NavBar';
import Caption from '../Caption';
import WeekDay from '../WeekDay';

import * as S from './Calendar.style';

type Props = DayPickerProps & {
  onSelect: (date: Date) => void;
  value: Date | null;
  className?: string;
};

function Calendar(props: Props) {
  const { onSelect, value, className, ...rest } = props;

  const [date, setDate] = useState(value || new Date());

  useEffect(() => setDate(value || new Date()), [value]);

  function handleDayClick(day: Date, modifiers: DayModifiers) {
    if (!onSelect || modifiers.disabled) return;

    onSelect(day);
  }

  return (
    <S.DatePickerContainer className={className} data-test-id="calendar">
      <DayPicker
        month={date}
        selectedDays={value || undefined}
        onDayClick={handleDayClick}
        showOutsideDays
        firstDayOfWeek={1}
        fromMonth={new Date()}
        disabledDays={{ before: new Date() }}
        weekdayElement={WeekDay}
        navbarElement={NavBar}
        captionElement={Caption}
        onMonthChange={setDate}
        {...rest}
      />
    </S.DatePickerContainer>
  );
}

export default Calendar;
