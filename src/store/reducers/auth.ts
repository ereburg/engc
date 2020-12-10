import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Nullable } from '@typings/common';
import { UserProfile } from '@typings/models';
import { AppState, AppThunk } from '@store/store';
import { Credentials, signIn, signOut } from '@services/requests';
import { removeCookie, updateCookie } from '@utils/cookie';

export type AuthStatus =
  | 'AUTHORIZED'
  | 'AUTHORIZATION'
  | 'UNAUTHORIZED'
  | 'UNAUTHORIZATION';

type AuthState = {
  profile: Nullable<UserProfile>;
  status: AuthStatus;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    profile: null,
    status: 'UNAUTHORIZED',
  } as AuthState,
  reducers: {
    userAuthorizationStarted(state) {
      if (state.status === 'UNAUTHORIZED') {
        state.status = 'AUTHORIZATION';
      }
    },
    userAuthorized(state, action: PayloadAction<UserProfile>) {
      if (['UNAUTHORIZED', 'AUTHORIZATION'].includes(state.status)) {
        state.status = 'AUTHORIZED';
        state.profile = action.payload;
      }
    },
    userUnauthorizationStarted(state) {
      if (state.status === 'AUTHORIZED') {
        state.status = 'UNAUTHORIZATION';
      }
    },
    userUnauthorizationFailed(state) {
      if (state.status === 'UNAUTHORIZATION') {
        state.status = 'AUTHORIZED';
      }
    },
    userUnauthorized(state) {
      if (state.status === 'UNAUTHORIZATION') {
        state.status = 'UNAUTHORIZED';
        state.profile = null;
      }
    },
  },
});

export const authActions = authSlice.actions;

export function signInThunk(params: Credentials): AppThunk {
  return (dispatch, getState) => {
    const auth = authStateSelector(getState());

    if (auth.status !== 'UNAUTHORIZED') return;

    dispatch(authActions.userAuthorizationStarted());
    signIn(params)
      .then(response => {
        dispatch(authActions.userAuthorized(response.profile));
        updateCookie('accessToken', response.jwt);
      })
      .catch(() => dispatch(authActions.userUnauthorized()));
  };
}

export function signOutThunk(): AppThunk {
  return (dispatch, getState) => {
    const auth = authStateSelector(getState());

    if (auth.status !== 'AUTHORIZED') return;

    dispatch(authActions.userUnauthorizationStarted());
    signOut()
      .then(() => {
        dispatch(authActions.userUnauthorized());
        removeCookie('accessToken');
      })
      .catch(() => dispatch(authActions.userUnauthorizationFailed()));
  };
}

export function authStateSelector(state: AppState): AuthState {
  return state.auth;
}

export default authSlice.reducer;
