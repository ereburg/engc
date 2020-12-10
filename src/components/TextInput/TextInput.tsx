import React, { useState } from 'react';

import * as S from './TextInput.style';

type TextInputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'prefix'
> & {
  className?: string;
  prefix?: React.ElementType | React.ReactElement;
  invalid?: boolean;
};

export type TextInputPrefixProps = {
  focused: boolean;
  invalid?: boolean;
};

export type InputRef = HTMLInputElement;

function TextInput(
  {
    className,
    prefix,
    disabled,
    invalid,
    onFocus,
    onBlur,
    ...rest
  }: TextInputProps,
  ref: React.Ref<InputRef>,
) {
  const [isFocused, setFocused] = useState(false);

  function renderPrefix() {
    if (!prefix) return null;
    if (React.isValidElement(prefix)) return prefix;

    const prefixProps: TextInputPrefixProps = {
      focused: isFocused,
      invalid,
    };

    return React.createElement(prefix, prefixProps);
  }

  function handleFocus(event: React.FocusEvent<HTMLInputElement>) {
    if (onFocus) {
      onFocus(event);
    }
    setFocused(true);
  }
  function handleBlur(event: React.FocusEvent<HTMLInputElement>) {
    if (onBlur) {
      onBlur(event);
    }
    setFocused(false);
  }

  return (
    <S.Container className={className}>
      {renderPrefix()}
      <S.Input
        ref={ref}
        {...rest}
        withPrefix={Boolean(prefix)}
        disabled={disabled}
        invalid={invalid}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </S.Container>
  );
}

export default React.forwardRef<InputRef, TextInputProps>(TextInput);
