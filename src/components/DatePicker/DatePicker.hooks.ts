import { MutableRefObject, RefObject, useCallback } from 'react';
import useOnClickOutside from '@hooks/useOnClickOutside';

export function useCloseOnClickOutside(
  menuRef:
    | RefObject<HTMLDivElement>
    | MutableRefObject<HTMLDivElement | undefined>,
  buttonRef:
    | RefObject<HTMLInputElement>
    | MutableRefObject<HTMLInputElement | undefined>,
  setOpen: (value: boolean) => void,
) {
  const handler = useCallback(
    event => {
      if (
        !menuRef.current ||
        menuRef.current.contains(event.target as Node) ||
        !buttonRef.current ||
        buttonRef.current.contains(event.target as Node)
      ) {
        return;
      }

      setOpen(false);
    },
    [buttonRef, menuRef, setOpen],
  );

  useOnClickOutside(menuRef, () => setOpen(false));
}
