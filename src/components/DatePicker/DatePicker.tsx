import React, { useState, useRef, useMemo } from 'react';
import { DayPickerProps } from 'react-day-picker';
import dateFnsFormat from 'date-fns/format';
import { Manager, Popper, PopperChildrenProps, Reference } from 'react-popper';

import TextInput, { InputPrefix } from '@components/TextInput';
import { ReactComponent as CalendarIcon } from '@assets/svg/daterange.svg';
import useOnKeyDown from '@hooks/useOnKeyDown';
import { setRefValue } from '@utils/common';

import * as S from './DatePicker.style';
import { useCloseOnClickOutside } from './DatePicker.hooks';
import Calendar from './components/Calendar';
import { DatePickerContainer } from './DatePicker.style';

type CustomProps = {
  className?: string;
  id?: string;
  name?: string;
  value: Date | null;
  onChange: (date: Date) => void;
  format?: string;
  disabled?: boolean;
  placeholder?: string;
  hideIcon?: boolean;
  invalid?: boolean;
};

type DatePickerProps = Omit<DayPickerProps, keyof CustomProps>;

type Props = CustomProps & {
  dayPickerProps?: DatePickerProps;
};

function DatePicker({
  className,
  id,
  name,
  value,
  onChange,
  format = 'MM.dd.yyyy',
  disabled,
  placeholder = 'Выберите дату',
  hideIcon,
  invalid,
  dayPickerProps,
  ...rest
}: Props) {
  const popupRef = useRef<HTMLDivElement>();
  const inputRef = useRef<HTMLInputElement>();
  const [isOpen, setOpen] = useState(false);

  useOnKeyDown(['Escape', 'Esc'], () => {
    if (isOpen) {
      setOpen(false);
    }
  });

  useCloseOnClickOutside(popupRef, inputRef, setOpen);

  const formattedValue = useMemo(
    () => (value ? dateFnsFormat(value, format) : ''),
    [value, format],
  );

  function handleChange(date: Date) {
    onChange && onChange(date);
    setOpen(false);
  }

  return (
    <DatePickerContainer>
      <Manager>
        <Reference>
          {refProps => (
            <TextInput
              className={className}
              prefix={hideIcon ? undefined : <InputPrefix as={CalendarIcon} />}
              id={id}
              name={name}
              disabled={disabled}
              readOnly={true}
              value={formattedValue}
              placeholder={placeholder}
              onFocus={() => {
                setOpen(true);
                if (inputRef.current) {
                  inputRef.current.blur();
                }
              }}
              invalid={invalid}
              {...rest}
              {...refProps}
              ref={node => {
                setRefValue(
                  refProps.ref as (instance: HTMLInputElement) => void,
                  node,
                );
                setRefValue(inputRef, node);
              }}
            />
          )}
        </Reference>
        {isOpen && (
          <Popper placement="bottom">
            {({ ref, style, placement }: PopperChildrenProps) => (
              <S.Popup
                style={style}
                ref={node => {
                  setRefValue(ref as (instance: HTMLDivElement) => void, node);
                  setRefValue(popupRef, node);
                }}
                data-placement={placement}
              >
                <Calendar
                  onSelect={handleChange}
                  value={value}
                  {...dayPickerProps}
                />
              </S.Popup>
            )}
          </Popper>
        )}
      </Manager>
    </DatePickerContainer>
  );
}

export default DatePicker;
