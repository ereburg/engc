import React from 'react';
import styled from 'styled-components';

type Props = {
  className?: string;
  error?: string;
  children: React.ReactNode;
};

function FormControl({ className, error, children }: Props) {
  return (
    <FieldContainer className={className} data-testid="field-container">
      {children}
      {error ? (
        <ErrorMessage data-testid="field-error">{error}</ErrorMessage>
      ) : null}
    </FieldContainer>
  );
}

const FieldContainer = styled.div`
  position: relative;
`;

const ErrorMessage = styled.span`
  position: absolute;
  top: 100%;
  margin-top: 2px;
  font-size: 12px;
  color: red;
`;

export default FormControl;
