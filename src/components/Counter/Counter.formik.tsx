import React from 'react';
import { FieldConfig, useField } from 'formik';

import Counter from './Counter';

type CounterFormikProps = Omit<
  React.ComponentProps<typeof Counter>,
  'value' | 'onChange'
> &
  Pick<FieldConfig, 'name'>;

function CounterFormik({ name, ...rest }: CounterFormikProps) {
  const [field, meta, helpers] = useField<number>({ name });

  return (
    <Counter
      {...rest}
      value={field.value}
      onChange={count => helpers.setValue(count)}
    />
  );
}

export default CounterFormik;
