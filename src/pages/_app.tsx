import React from 'react';
import App from 'next/app';
import NProgress from 'nprogress';
import Router from 'next/router';
import { Provider } from 'react-redux';

import { appWithTranslation, i18n } from '@server/i18n';

import '@assets/css/index.css';
import withRedux from '@hocs/withRedux';
import withAuth from '@hocs/withAuth';
import { CustomAppProps } from '@typings/hocs';
import { updateCookie } from '@utils/cookie';
import ModalProvider from '@components/Modal';

/**
 * Custom App documentation
 * https://nextjs.org/docs/advanced-features/custom-app
 */
class CustomApp extends App<CustomAppProps> {
  /**
   * Adding a custom getInitialProps in your App will disable Automatic Static Optimization.
   * https://nextjs.org/docs/advanced-features/automatic-static-optimization
   */
  /*
  static async getInitialProps({ Component, ctx }: CustomAppContext) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    return { pageProps };
  }
*/

  componentDidMount() {
    i18n.on('languageChanged', (lang: string) => updateCookie('lng', lang));

    Router.events.on('routeChangeStart', url => NProgress.start());
    Router.events.on('routeChangeComplete', () => NProgress.done());
    Router.events.on('routeChangeError', () => NProgress.done());
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Provider store={store}>
        <ModalProvider>
          <Component {...pageProps} />
        </ModalProvider>
      </Provider>
    );
  }
}

export default appWithTranslation(withRedux(withAuth(CustomApp)));
