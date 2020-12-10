import { Nullable } from '@typings/common';
import { UserProfile } from '@typings/models';
import { NextPageContext } from 'next';
import { AppState, AppStore } from '@store/store';
import { AppContext, AppInitialProps, AppProps } from 'next/app';

/**
 *  Page context is "ctx" field of App Context
 *
 *  Also Page context is argument of "getInitialProps" function
 *    of Page component (from "pages" folder)
 */
export interface ReduxPageContext extends NextPageContext {}

export interface AuthPageContext extends ReduxPageContext {
  store: AppStore;
  isServer: boolean;
}

export interface CustomAppPageContext extends AuthPageContext {
  profile: Nullable<UserProfile>;
  isAuthorized: boolean;
}

/** App context - argument of "getInitialProps" function of Custom App components */
export interface ReduxAppContext extends AppContext {
  ctx: ReduxPageContext;
}

export interface AuthAppContext extends ReduxAppContext {
  ctx: AuthPageContext;
}

export interface CustomAppContext extends AuthAppContext {
  ctx: CustomAppPageContext;
}

/** App initial props - result of "getInitialProps" function */
export type ReduxAdditionalInitialProps = {
  initialState: AppState;
  isServer: boolean;
};

export type AuthAdditionalInitialProps = {
  profile: Nullable<UserProfile>;
};

export type CustomAppInitialProps = AppInitialProps;

export type AuthAppInitialProps = CustomAppInitialProps &
  AuthAdditionalInitialProps;

export type ReduxAppInitialProps = AuthAppInitialProps &
  ReduxAdditionalInitialProps;

/** Props of wrapper app components */
export type ReduxAppProps = AppProps & ReduxAppInitialProps;

export type AuthAppProps = Omit<ReduxAppProps, 'initialState'> & {
  store: AppStore;
};

/** Page props that will be added to PageComponent */
export type CustomAppProps = AuthAppProps;
