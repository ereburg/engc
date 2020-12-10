import React, { useCallback } from 'react';
import { useField, FieldConfig } from 'formik';

import FormControl from '@components/FormControl';

import Select, { SelectOption } from './Select';
import { Nullable } from '@typings/common';

type FormikFieldProps = Pick<FieldConfig, 'name' | 'type'>;
type InputProps = Omit<
  React.ComponentProps<typeof Select>,
  'name' | 'value' | 'onChange'
>;

type Props = FormikFieldProps &
  InputProps & {
    className?: string;
    hideError?: boolean;
    clearErrorOnChange?: boolean;
    error?: string;
  };

function SelectFormik({
  className,
  name,
  error: customError,
  hideError,
  clearErrorOnChange,
  ...rest
}: Props) {
  const [field, meta, helpers] = useField<Nullable<SelectOption>>({ name });

  const error = customError ?? meta.touched ? meta.error : '';

  const { value } = field;
  const { setValue, setError } = helpers;

  const handleChange = useCallback(
    (newOption: Nullable<SelectOption>) => {
      if (clearErrorOnChange) {
        setError(null);
      }

      setValue(newOption);
    },
    [clearErrorOnChange, setError, setValue],
  );

  return (
    <FormControl className={className} error={error}>
      <Select value={value} onChange={handleChange} {...rest} />
    </FormControl>
  );
}

export default SelectFormik;
