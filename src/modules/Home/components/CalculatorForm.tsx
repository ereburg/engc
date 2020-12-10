import React from 'react';
import styled, { css } from 'styled-components';
import {
  Formik,
  FormikProps,
  Form,
  FormikHelpers,
  FormikValues,
  FormikErrors,
} from 'formik';
import { useRouter } from 'next/router';

import { media } from '@utils/mixins';
import { colors } from '@constants/theme';
import Button from '@components/Button';
import { PhonePrefix } from '@components/TextInput';
import { validators } from '@utils/validation';
import { MaskedTextInputFormik } from '@components/MaskedTextInput';

import Counter from './Counter';

function getRoomsLabel(count: number): string {
  let word = 'room';

  if (count === 1) {
    word = 'room';
  }

  if (count > 1) {
    word = 'rooms';
  }

  return `${count} ${word}`;
}

function getBathroomsLabel(count: number): string {
  let word = 'restroom';

  if (count === 1) {
    word = 'restroom';
  }

  if (count > 1) {
    word = 'restrooms';
  }

  return `${count} ${word}`;
}

type FormValues = {
  phone: string;
  rooms: number;
  bathrooms: number;
};

function validate(values: FormValues) {
  const errors: FormikErrors<FormikValues> = {};

  if (validators.required(values.phone)) {
    errors.phone = 'Please, enter phone number';
  }

  return errors;
}

function CalculatorFormContainer() {
  const router = useRouter();

  function handleSubmit(
    values: FormValues,
    helpers: FormikHelpers<FormValues>,
  ) {
    const searchParams = new URLSearchParams();
    searchParams.set('rooms', String(values.rooms));
    searchParams.set('bathrooms', String(values.bathrooms));
    searchParams.set('phone', values.phone);

    router.push({ pathname: '/order', search: searchParams.toString() });
  }

  return (
    <Formik<FormValues>
      component={CalculatorForm}
      initialValues={{
        phone: '',
        rooms: 1,
        bathrooms: 1,
      }}
      onSubmit={handleSubmit}
      validate={validate}
      validateOnChange={false}
      validateOnBlur={false}
    />
  );
}

function CalculatorForm({ isSubmitting }: FormikProps<FormValues>) {
  return (
    <FormContainer data-testid="cost-request-form">
      <CalcBlockWrapper>
        <CounterRow>
          <Counter name="rooms" getLabel={getRoomsLabel} max={5} />
        </CounterRow>
        <CounterRow>
          <Counter name="bathrooms" getLabel={getBathroomsLabel} max={5} />
        </CounterRow>
      </CalcBlockWrapper>
      <InputContainer>
        <MaskedTextInputFormik
          prefix={PhonePrefix}
          name="phone"
          clearErrorOnChange
          mask="000-000-0000"
          data-testid="phone-field"
          placeholder="XXX-XXX-XXXX"
        />
      </InputContainer>

      <FormButton type="submit" disabled={isSubmitting}>
        Get a Price
      </FormButton>
    </FormContainer>
  );
}

const FormContainer = styled(Form)`
  position: relative;
  padding: 0;
  color: ${colors.darkText};
  overflow: hidden;
`;

const CalcBlockWrapper = styled.div`
  margin-bottom: 10px;
`;

const CounterRow = styled.div`
  margin-bottom: 5px;

  ${media.noDesktop(css`
    margin-bottom: 15px;
  `)}

  ${media.tabletAndMobile(css`
    margin-bottom: 5px;
  `)}

  &:last-child {
    margin-bottom: 0;
  }
`;

const FormButton = styled(Button)`
  font-size: 16px;
  padding: 22px 30px;
  background-color: ${colors.yellowLight};
  width: 100%;
  font-weight: 600;

  &:hover,
  &:focus {
    background-color: ${colors.yellow};
  }

  ${media.noDesktop(css`
    font-size: 18px;
  `)}

  ${media.mobile(css`
    padding: 22px;
  `)}
`;

const InputContainer = styled.div`
  margin-bottom: 20px;

  ${media.noDesktop(css`
    margin-bottom: 15px;
  `)}

  ${media.mobile(css`
    margin-bottom: 20px;
  `)}
`;

export default CalculatorFormContainer;
