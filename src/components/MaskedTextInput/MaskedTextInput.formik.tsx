import React, { useCallback } from 'react';
import { useField, FieldConfig } from 'formik';

import FormControl from '@components/FormControl';

import MaskedTextInput from './MaskedTextInput';
import { log } from 'util';

type FormikFieldProps = Pick<FieldConfig, 'name' | 'type'>;
type InputProps = Omit<
  React.ComponentProps<typeof MaskedTextInput>,
  'name' | 'type' | 'onChange'
>;

type Props = FormikFieldProps &
  InputProps & {
    hideError?: boolean;
    clearErrorOnChange?: boolean;
    error?: string;
  };

function MaskedTextInputFormik({
  className,
  name,
  id,
  error: customError,
  type = 'text',
  hideError,
  clearErrorOnChange,
  ...rest
}: Props) {
  const [field, meta, helpers] = useField<string>({ name, type });

  const error = customError ?? meta.touched ? meta.error : '';

  const { value, onBlur } = field;
  const { setValue, setError } = helpers;

  const handleChange = useCallback(
    (valueString: string) => {
      if (clearErrorOnChange) {
        setError('');
      }

      setValue(valueString);
    },
    [clearErrorOnChange, setError, setValue],
  );

  console.log('value', value);
  return (
    <FormControl className={className} error={error}>
      <MaskedTextInput
        id={id}
        invalid={Boolean(error)}
        name={name}
        type={type}
        value={value}
        onBlur={onBlur}
        onChange={handleChange}
        {...rest}
      />
    </FormControl>
  );
}

export default MaskedTextInputFormik;
