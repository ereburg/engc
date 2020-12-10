import React from 'react';
import { NextComponentType } from 'next';
import { AppInitialProps } from 'next/app';

import { getCookie, updateCookie } from '@utils/cookie';
import apiService from '@services/api';
import { getUserProfile } from '@services/requests';
import { authActions, authStateSelector } from '@store/reducers/auth';
import {
  AuthAppContext,
  AuthAppInitialProps,
  AuthAppProps,
  CustomAppContext,
  CustomAppProps,
} from '@typings/hocs';
import { i18n } from '@server/i18n';

type CustomAppType = NextComponentType<
  CustomAppContext,
  AppInitialProps,
  CustomAppProps
>;

function withAuth(CustomApp: CustomAppType) {
  const componentName = CustomApp.displayName || CustomApp.name || 'App';

  class AuthApp extends React.Component<AuthAppProps> {
    public static displayName = `withAuth(${componentName})`;

    public static getInitialProps = async (
      appCtx: AuthAppContext,
    ): Promise<AuthAppInitialProps> => {
      const { store, isServer } = appCtx.ctx;

      /** Get accessToken from cookie and initialize API service */
      const accessToken = getCookie('accessToken', appCtx.ctx.req);

      if (isServer) {
        apiService.setAccessToken(accessToken);
      }

      let auth = authStateSelector(store.getState());

      /** Request user profile only on server side if access token is not empty */
      const shouldRequestProfile = isServer && Boolean(accessToken);

      const profile = shouldRequestProfile
        ? await getUserProfile()
            .then(profileResponse => {
              store.dispatch(authActions.userAuthorized(profileResponse));
              return profileResponse;
            })
            .catch(() => null)
        : auth.profile;

      auth = authStateSelector(store.getState());

      if (typeof CustomApp.getInitialProps !== 'function') {
        throw new Error(
          `Component "${componentName}" doesn't have required static field "getInitialProps"`,
        );
      }

      const initialProps = await CustomApp.getInitialProps({
        ...appCtx,
        ctx: {
          ...appCtx.ctx,
          profile,
          isAuthorized: auth.status === 'AUTHORIZED',
        },
      });

      return {
        ...initialProps,
        profile,
      };
    };

    public render() {
      return <CustomApp {...this.props} />;
    }
  }

  return AuthApp;
}

export default withAuth;
