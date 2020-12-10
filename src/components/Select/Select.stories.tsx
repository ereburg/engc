import React from 'react';
import styled from 'styled-components';

import Select from './Select';
import { Option } from '@typings/common';
import { generateTimeOptions } from '@utils/common';

export default {
  component: Select,
  title: 'Select',
};

const Container = styled.div`
  width: 320px;
  padding: 10px;
`;

const timeOptions = generateTimeOptions(8, 20);

export const defaultSelect = () => (
  <Container>
    <Select
      options={timeOptions}
      value={timeOptions[0]}
      onChange={console.log}
    />
  </Container>
);
