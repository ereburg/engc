import React from 'react';
import styled, { css } from 'styled-components';

import { ReactComponent as MinusIcon } from '@assets/svg/minus.svg';
import { ReactComponent as PlusIcon } from '@assets/svg/plus.svg';
import { colors } from '@constants/theme';
import { FieldConfig, useField } from 'formik';

type CounterProps = {
  getLabel: (count: number) => React.ReactNode;
  value: number;
  onChange: (count: number) => void;
  max?: number;
  min?: number;
};

type CounterFormikProps = Omit<CounterProps, 'value' | 'onChange'> &
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

function Counter({ getLabel, value, onChange, max, min = 1 }: CounterProps) {
  return (
    <Container>
      <DecrementButton
        type="button"
        onClick={() => onChange(value - 1)}
        disabled={value === min}
      >
        <MinusIcon />
      </DecrementButton>
      <LabelText>{getLabel(value)}</LabelText>
      <IncrementButton
        type="button"
        onClick={() => onChange(value + 1)}
        disabled={value === max}
      >
        <PlusIcon />
      </IncrementButton>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
`;

const LabelText = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.2;
  background-color: ${colors.white};
  flex: 1 1 auto;
`;

const CounterButton = styled.button`
  display: flex !important;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border: 2px solid ${colors.border};
  background-color: ${colors.white};
  overflow: hidden;
  cursor: pointer;
  color: ${colors.darkText};

  &:hover {
    color: ${colors.green};
  }

  &:disabled {
    cursor: default;
    color: ${colors.blackText};
    opacity: 0.75;
  }
`;

const DecrementButton = styled(CounterButton)`
  width: 62px;
  height: 60px;
  background-color: #efefef;
  position: relative;
  display: block;
  cursor: pointer;
  border-radius: 0;
`;

const IncrementButton = styled(CounterButton)`
  width: 62px;
  height: 60px;
  background-color: #efefef;
  position: relative;
  display: block;
  cursor: pointer;
  border-radius: 0;
`;

export default CounterFormik;
