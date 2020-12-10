import React, { useCallback } from 'react';
import { FieldConfig, FieldProps, useField } from 'formik';

import FormControl from '@components/FormControl';
import DatePicker from '@components/DatePicker';
import { Nullable } from '@typings/common';

type FormikFieldProps = Pick<FieldConfig, 'name'>;
type InputProps = Omit<
  React.ComponentProps<typeof DatePicker>,
  'name' | 'onChange' | 'value'
>;

type Props = FormikFieldProps &
  InputProps & {
    hideError?: boolean;
    clearErrorOnChange?: boolean;
    error?: string;
  };

function DatePickerFormik({
  className,
  name,
  error: customError,
  hideError,
  clearErrorOnChange,
  ...rest
}: Props) {
  const [field, meta, helpers] = useField<Nullable<Date>>({ name });

  const error = customError ?? meta.touched ? meta.error : '';

  const { value } = field;
  const { setValue, setError } = helpers;

  const handleChange = useCallback(
    (date: Date) => {
      if (clearErrorOnChange) {
        setError(null);
      }

      setValue(date);
    },
    [clearErrorOnChange, setError, setValue],
  );

  return (
    <FormControl className={className} error={error}>
      <DatePicker
        invalid={Boolean(error)}
        name={name}
        value={value}
        onChange={handleChange}
        {...rest}
      />
    </FormControl>
  );
}

export default DatePickerFormik;
