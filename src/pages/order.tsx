import React from 'react';

import Page from '@components/Page';
import SuccessOrder from '@modules/SuccessOrder';
import SuccessPageProvider from '@components/SuccessPageProvider';
import Order from '@modules/Order';

function OrderPage() {
  return (
    <Page title="GetClean - Antibacterial cleaning of your place">
      <SuccessPageProvider>
        {isSuccess => (isSuccess ? <SuccessOrder /> : <Order />)}
      </SuccessPageProvider>
    </Page>
  );
}

export default OrderPage;
