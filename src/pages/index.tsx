import React from 'react';

import Page from '@components/Page';
import Home from '@modules/Home';
import SuccessPageProvider from '@components/SuccessPageProvider';
import Layout from '@modules/Home/Layout';
import SuccessOrder from '@modules/SuccessOrder';

function HomePage() {
  return (
    <Page title="GetClean - Antibacterial cleaning of your place">
      <Layout>
        <SuccessPageProvider>
          {isSuccess => (isSuccess ? <SuccessOrder /> : <Home />)}
        </SuccessPageProvider>
      </Layout>
    </Page>
  );
}

export default HomePage;
