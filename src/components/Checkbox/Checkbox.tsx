import React, { useCallback, useState } from 'react';
import styled, { css } from 'styled-components';

import { ReactComponent as CheckboxCheckedIcon } from '@assets/svg/checkbox-checked.svg';
import { ReactComponent as CheckboxUncheckedIcon } from '@assets/svg/checkbox-unchecked.svg';
import { media, visuallyHidden } from '@utils/mixins';

type Props = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> & {
  className?: string;
  checked?: boolean;
  label?: string | React.ReactElement;
};

function Checkbox({
  checked: checkedProp,
  className,
  label,
  onChange,
  readOnly,
  id,
  defaultChecked,
  onFocus,
  onBlur,
  ...inputProps
}: Props) {
  const { current: isControlled } = React.useRef(
    typeof checkedProp === 'boolean',
  );
  const [checkedState, setCheckedState] = useState(defaultChecked);

  const handleFocus = useCallback(
    event => {
      if (onFocus) {
        onFocus(event);
      }
    },
    [onFocus],
  );

  const handleBlur = useCallback(
    event => {
      if (onBlur) {
        onBlur(event);
      }
    },
    [onBlur],
  );

  const handleChange = useCallback(
    event => {
      const checked = event.target.checked;
      if (!isControlled) {
        setCheckedState(checked);
      }

      if (onChange) {
        onChange(event);
      }
    },
    [isControlled, onChange],
  );

  const checked = isControlled ? checkedProp : checkedState;
  return (
    <Label
      className={className}
      hasText={Boolean(label)}
      htmlFor={id}
      aria-label={String(label)}
    >
      <Input
        id={id}
        checked={Boolean(checked)}
        onChange={handleChange}
        defaultChecked={defaultChecked}
        {...inputProps}
        type="checkbox"
        readOnly={readOnly || !onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <Icon as={checked ? CheckboxCheckedIcon : CheckboxUncheckedIcon} />
      {React.isValidElement(label) ? label : <LabelText>{label}</LabelText>}
    </Label>
  );
}

const Label = styled.label<{
  hasText: boolean;
}>`
  margin-bottom: 0;
  position: relative;
  display: inline-flex;
  align-items: center;
  line-height: 20px;
  user-select: none;

  ${media.noMobile(css`
    cursor: pointer;
  `)}

  ${props =>
    props.hasText
      ? css`
          padding-left: 40px;
          padding-right: 2px;
        `
      : css`
          padding-left: 35px;
        `}
`;

const LabelText = styled.span`
  display: inline-block;
  font-size: 18px;

  ${media.mobile(css`
    font-size: 16px;
  `)}
`;

const Icon = styled.svg`
  height: 25px;
  width: 25px;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
`;

const Input = styled.input`
  ${visuallyHidden}
`;

export default Checkbox;
