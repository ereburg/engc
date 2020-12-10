import React, { useState } from 'react';

import createCtx from '@hooks/createCtx';

const [useCtx, Provider] = createCtx<() => void>();

function SuccessPageProvider({
  children,
}: {
  children: (isSuccess: boolean) => React.ReactNode;
}) {
  const [isSuccess, setSuccess] = useState(false);

  return (
    <Provider value={() => setSuccess(true)}>{children(isSuccess)}</Provider>
  );
}

export const useSuccessPage = useCtx;

export default SuccessPageProvider;
