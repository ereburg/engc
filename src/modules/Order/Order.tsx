import React from 'react';
import styled from 'styled-components';
import {
  Form,
  Formik,
  FormikErrors,
  FormikHelpers,
  FormikValues,
} from 'formik';

import ContentContainer from '@components/ContentContainer';
import { CounterFormik } from '@components/Counter';
import { PhonePrefix, TextInputFormik } from '@components/TextInput';

import Layout from './components/Layout';
import OrderInfoBlock from '@modules/Order/components/OrderInfoBlock';
import { SelectFormik } from '@components/Select';
import { generateTimeOptions } from '@utils/common';
import { DatePickerFormik } from '@components/DatePicker';
import { Nullable, Option } from '@typings/common';
import { MaskedTextInputFormik } from '@components/MaskedTextInput';
import { useSuccessPage } from '@components/SuccessPageProvider';
import useSearchParams from '@hooks/useSearchParams';
import { parseNumberParam } from '@utils/searchParams';
import { validators } from '@utils/validation';

const timeOptions = generateTimeOptions(8, 20);

const REQUIRED_FIELD_ERROR = 'Required field';

function validate(values: FormValues) {
  const errors: FormikErrors<FormikValues> = {};

  if (validators.required(values.firstName)) {
    errors.firstName = REQUIRED_FIELD_ERROR;
  }

  if (validators.required(values.lastName)) {
    errors.lastName = REQUIRED_FIELD_ERROR;
  }

  if (validators.required(values.lastName)) {
    errors.lastName = REQUIRED_FIELD_ERROR;
  }

  if (validators.required(values.phone)) {
    errors.phone = 'Please, enter phone number';
  }

  if (validators.required(values.date)) {
    errors.date = REQUIRED_FIELD_ERROR;
  }

  if (validators.required(values.time)) {
    errors.time = REQUIRED_FIELD_ERROR;
  }

  if (validators.required(values.streetAddress)) {
    errors.streetAddress = REQUIRED_FIELD_ERROR;
  }

  if (validators.required(values.city)) {
    errors.city = REQUIRED_FIELD_ERROR;
  }

  if (validators.required(values.state)) {
    errors.state = REQUIRED_FIELD_ERROR;
  }

  if (validators.required(values.apartment)) {
    errors.apartment = REQUIRED_FIELD_ERROR;
  }

  return errors;
}

type FormValues = {
  firstName: string;
  lastName: string;
  phone: string;
  rooms: number;
  bathrooms: number;
  date: Nullable<Date>;
  time: Nullable<Option<number>>;
  streetAddress: string;
  city: string;
  state: string;
  apartment: string;
};

function Order() {
  const showSuccessPage = useSuccessPage();
  const searchParams = useSearchParams();

  function handleSubmit(
    values: FormValues,
    helpers: FormikHelpers<FormValues>,
  ) {
    console.log('Values: ', values);
    fetch(process.env.REACT_APP_API_URL + '/landing/en', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name: [values.firstName, values.lastName].join(' '),
        phone: '+1' + values.phone,
        rooms: values.rooms,
        bathrooms: values.bathrooms,
        date: values.date?.toISOString(),
        time: values.time?.label,
        address: [
          values.apartment,
          values.streetAddress,
          values.city,
          values.state,
        ]
          .filter(Boolean)
          .join(' '),
      }),
    })
      .then(response => {
        if (response.ok) {
          showSuccessPage();
          helpers.setSubmitting(false);
        }
      })
      .catch(console.error);
  }

  return (
    <Formik<FormValues>
      initialValues={{
        firstName: '',
        lastName: '',
        phone: searchParams.get('phone') || '',
        rooms: parseNumberParam(searchParams.get('rooms')) || 1,
        bathrooms: parseNumberParam(searchParams.get('bathrooms')) || 1,
        date: null,
        time: timeOptions[0],
        streetAddress: '',
        city: '',
        state: 'CA',
        apartment: '',
      }}
      onSubmit={handleSubmit}
      validate={validate}
    >
      {({ values }) => (
        <Layout>
          <Container>
            <ContentContainer>
              <Form>
                <InnerRow>
                  <FormColumn>
                    <TopRow>
                      <Title>Set up your antibacterial cleaning</Title>
                    </TopRow>

                    <Section>
                      <FieldRow>
                        <FieldContainer>
                          <FormLabel>Choose rooms count</FormLabel>
                          <CounterFormik
                            name="rooms"
                            getLabel={count =>
                              `${count} ${count > 1 ? 'rooms' : 'room'}`
                            }
                          />
                        </FieldContainer>
                        <FieldContainer>
                          <FormLabel>Choose bathrooms count</FormLabel>
                          <CounterFormik
                            name="bathrooms"
                            getLabel={count =>
                              `${count} ${count > 1 ? 'bathrooms' : 'bathroom'}`
                            }
                          />
                        </FieldContainer>
                      </FieldRow>

                      <FieldRow>
                        <FieldContainer>
                          <DatePickerFormik
                            name="date"
                            placeholder="Choose date"
                            clearErrorOnChange
                          />
                        </FieldContainer>
                        <FieldContainer>
                          <SelectFormik
                            name="time"
                            options={timeOptions}
                            clearErrorOnChange
                          />
                        </FieldContainer>
                      </FieldRow>
                    </Section>

                    <Section>
                      <FieldRow>
                        <FieldContainer>
                          <FormControl>
                            <FormLabel>First Name</FormLabel>
                            <TextInputFormik
                              name="firstName"
                              clearErrorOnChange
                            />
                          </FormControl>
                        </FieldContainer>

                        <FieldContainer>
                          <FormControl>
                            <FormLabel>Last Name</FormLabel>
                            <TextInputFormik
                              name="lastName"
                              clearErrorOnChange
                            />
                          </FormControl>
                        </FieldContainer>

                        <FieldContainer>
                          <FormControl>
                            <FormLabel>Street Address</FormLabel>
                            <TextInputFormik
                              name="streetAddress"
                              clearErrorOnChange
                            />
                          </FormControl>
                        </FieldContainer>

                        <FieldContainer>
                          <FormControl>
                            <FormLabel>Apt # (optional)</FormLabel>
                            <TextInputFormik
                              name="apartment"
                              clearErrorOnChange
                            />
                          </FormControl>
                        </FieldContainer>

                        <FieldContainer>
                          <FormControl>
                            <FormLabel>City</FormLabel>
                            <TextInputFormik name="city" clearErrorOnChange />
                          </FormControl>
                        </FieldContainer>

                        <FieldContainer>
                          <FormControl>
                            <FormLabel>State</FormLabel>
                            <TextInputFormik
                              name="state"
                              readOnly
                              clearErrorOnChange
                            />
                          </FormControl>
                        </FieldContainer>

                        <FieldContainer>
                          <FormControl>
                            <FormLabel>Phone Number</FormLabel>
                            <MaskedTextInputFormik
                              prefix={PhonePrefix}
                              name="phone"
                              mask="000-000-0000"
                              data-testid="phone-field"
                              placeholder="XXX-XXX-XXXX"
                              clearErrorOnChange
                            />
                          </FormControl>
                        </FieldContainer>
                      </FieldRow>
                    </Section>

                    <BottomSection>
                      <SubmitButton type="submit">
                        Complete booking
                      </SubmitButton>
                    </BottomSection>
                  </FormColumn>
                  <SidebarColumn>
                    <OrderInfoBlockContainer>
                      <OrderInfoBlock
                        bathroomCount={values.bathrooms}
                        roomCount={values.rooms}
                      />
                    </OrderInfoBlockContainer>
                  </SidebarColumn>
                </InnerRow>
              </Form>
            </ContentContainer>
          </Container>
        </Layout>
      )}
    </Formik>
  );
}

const Container = styled.div`
  padding-top: 120px;
`;

const InnerRow = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin: 0 -20px;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

const FormColumn = styled.div`
  flex: 1;
  padding: 0 20px;

  @media (min-width: 1024px) {
    flex: 0 0 66.66%;
  }
`;

const SidebarColumn = styled.div`
  flex: 1;
  padding: 0 20px;

  @media (min-width: 1024px) {
    flex: 0 0 33.33%;
  }
`;

const OrderInfoBlockContainer = styled.div`
  margin-bottom: 30px;
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const Title = styled.h1`
  font-size: 26px;
  line-height: 36px;
  font-weight: 500;
  margin: 0;
`;

const Section = styled.div`
  border-bottom: 1px dashed #dadada;
  padding-bottom: 30px;
  margin-bottom: 25px;
`;

const FieldRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -20px;
`;

const FieldContainer = styled.div`
  flex: 0 0 100%;
  padding: 20px;

  @media (min-width: 768px) {
    flex: 0 0 50%;
  }

  input {
    border-radius: 5px;
  }
`;

const FormControl = styled.div``;

const FormLabel = styled.label`
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 10px;
  display: inline-block;
  font-weight: 500;
`;

const BottomSection = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 30px;
`;

const SubmitButton = styled.button`
  display: inline-block;
  vertical-align: top;
  border: 0;
  transition: 0.3s;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  line-height: 60px;
  padding: 0 45px;
  border-radius: 5px;
  font-size: 16px;
  background-color: #ffe16c;
  color: #000;
  box-shadow: 0 3px 0 0 #f2c20d;
  font-weight: bold;
  text-transform: uppercase;
  white-space: nowrap;
`;

export default Order;
