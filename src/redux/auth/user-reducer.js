import { createReducer } from '@reduxjs/toolkit';
import initialState from 'redux/initialState';
import * as operations from 'redux/auth/auth-operations';

export const userReducer = createReducer(initialState.auth.user, {
  [operations.registerUser.fulfilled]: (_, { payload }) => payload.user,
  [operations.logInUser.fulfilled]: (_, { payload }) => payload.user,
  [operations.logOutUser.fulfilled]: () => ({
    name: null,
    email: null,
    avatarUrl: null,
  }),
  [operations.currentUser.fulfilled]: (_, { payload }) => payload.user,
  [operations.updateUser.fulfilled]: (_, { payload }) => payload.user,
  [operations.deleteAvatarUser.fulfilled]: (_, { payload }) => payload.user,
});
