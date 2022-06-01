import { createReducer } from '@reduxjs/toolkit';
import initialState from 'redux/initialState';
import * as operations from 'redux/auth/auth-operations';

export const tokenUserReducer = createReducer(initialState.auth.token, {
  [operations.registerUser.fulfilled]: (_, { payload }) => payload.token,
  [operations.logInUser.fulfilled]: (_, { payload }) => payload.token,
  [operations.logOutUser.fulfilled]: () => null,
});
