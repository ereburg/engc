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
import { PhonePrefix, TextInputFormik } from '@components/TextInput';
import { integerChecker, validators } from '@utils/validation';
import { MaskedTextInputFormik } from '@components/MaskedTextInput';

type FormValues = {
  phone: string;
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
    searchParams.set('phone', values.phone);

    router.push({ pathname: '/order', search: searchParams.toString() });
  }

  return (
    <Formik<FormValues>
      component={CalculatorForm}
      initialValues={{
        phone: '',
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
      <InputContainer>
        <TextInputFormik
          prefix={PhonePrefix}
          name="phone"
          clearErrorOnChange
          data-testid="phone-field"
          placeholder="Phone number"
          parse={integerChecker}
          maxLength={20}
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
  display: flex;
  margin-top: 30px;
  padding: 0;
  color: ${colors.darkText};
  overflow: hidden;

  ${media.smallTabletAndMobile(css`
    flex-direction: column;
    margin-top: 50px;
  `)}
`;

const InputContainer = styled.div`
  margin: 0 20px 0 0;
  flex: 1 1 40%;

  input {
    height: 60px;
  }

  ${media.noDesktop(css`
    margin-bottom: 15px;
  `)}

  ${media.smallTabletAndMobile(css`
    margin: 0 0 20px;
  `)}
`;

const FormButton = styled(Button)`
  flex: 1 1 40%;
  font-size: 16px;
  padding: 12px 30px;
  background-color: ${colors.yellowLight};
  width: 100%;
  min-height: 60px;
  height: 60px;

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

export default CalculatorFormContainer;
