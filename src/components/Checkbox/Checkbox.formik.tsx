import React from 'react';
import { FieldConfig, useField } from 'formik';

import Checkbox from './Checkbox';

type FormikFieldProps = Pick<FieldConfig, 'name'>;

type CheckboxProps = Omit<React.ComponentProps<typeof Checkbox>, 'name'>;

type Props = FormikFieldProps & CheckboxProps;

function CheckboxFormik({ name, value, ...rest }: Props) {
  const [field] = useField<CheckboxProps['value']>({
    name,
    type: 'checkbox',
    value,
  });

  return <Checkbox {...rest} {...field} />;
}

export default CheckboxFormik;
