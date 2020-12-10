import React from 'react';
import styled from 'styled-components';

import Button from './Button';

export default {
  component: Button,
  title: 'Button',
};

const Container = styled.div`
  width: 320px;
  padding: 10px;

  button {
    width: 100%;
  }
`;

export const defaultButton = () => (
  <Container>
    <Button>Рассчитать стоимость</Button>
  </Container>
);
