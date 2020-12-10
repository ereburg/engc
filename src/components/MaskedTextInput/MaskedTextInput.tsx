import React, { useEffect, useRef } from 'react';
import Imask, { MaskedPattern } from 'imask';

import TextInput from '@components/TextInput';

type MaskedTextInputProps = Omit<
  React.ComponentProps<typeof TextInput>,
  'onChange'
> & {
  mask: string;
  definitions?: MaskedPattern.Definitions;
  blocks?: MaskedPattern['blocks'];
  onChange?: (value: string) => void;
};

function MaskedTextInput({
  mask,
  definitions,
  blocks,
  onChange,
  value,
  ...textInputProps
}: MaskedTextInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const imaskRef = useRef<Imask.InputMask<any> | null>();

  useEffect(() => {
    if (!inputRef.current) return;

    if (!imaskRef.current) {
      imaskRef.current = Imask(inputRef.current, { mask, definitions, blocks });
      imaskRef.current.unmaskedValue = value as string;
    }

    const imask = imaskRef.current;

    function acceptListener() {
      if (onChange) {
        onChange(imask.unmaskedValue);
      }
    }

    imaskRef.current.on('accept', acceptListener);

    return () => {
      imask.off('accept', acceptListener);
    };
  }, [blocks, definitions, mask, onChange, value]);

  return <TextInput ref={inputRef} {...textInputProps} />;
}

export default MaskedTextInput;
