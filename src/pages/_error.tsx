import React from 'react';

import Page from '@components/Page';
import { CustomAppPageContext } from '@typings/hocs';
import { redirect } from '@utils/redirect';

function ErrorPage() {
  return (
    <Page title="Ошибка">
      <h1>Not found</h1>
    </Page>
  );
}

ErrorPage.getInitialProps = ({ res, asPath, err }: CustomAppPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;

  const isNotFound = statusCode === 404;
  const shouldRedirect =
    process.env.REACT_APP_REDIRECT_IF_NOT_FOUND === 'true' && isNotFound;

  if (shouldRedirect) {
    redirect({
      currentUrl: asPath ?? '',
      location: 'https://getclean.by',
      res,
    });
  }

  return {};
};

export default ErrorPage;
