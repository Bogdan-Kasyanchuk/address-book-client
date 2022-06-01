import { createReducer } from '@reduxjs/toolkit';
import initialState from 'redux/initialState';
import * as operations from 'redux/auth/auth-operations';

export const loggedUserReducer = createReducer(initialState.auth.isLoggedIn, {
  [operations.registerUser.fulfilled]: () => true,
  [operations.logInUser.fulfilled]: () => true,
  [operations.logOutUser.fulfilled]: () => false,
  [operations.currentUser.fulfilled]: () => true,
});
