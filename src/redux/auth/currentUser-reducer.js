import { createReducer } from '@reduxjs/toolkit';
import initialState from 'redux/initialState';
import * as operations from 'redux/auth/auth-operations';

export const currentUserReducer = createReducer(
  initialState.auth.isFetchingCurrentUser,
  {
    [operations.currentUser.fulfilled]: () => false,
    [operations.currentUser.pending]: () => true,
    [operations.currentUser.rejected]: () => false,
  },
);
