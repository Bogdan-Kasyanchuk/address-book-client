import { combineReducers } from '@reduxjs/toolkit';
import { userReducer } from 'redux/auth/user-reducer';
import { tokenUserReducer } from 'redux/auth/tokenUser-reducer';
import { loggedUserReducer } from 'redux/auth/loggedUser-reducer';
import { currentUserReducer } from 'redux/auth/currentUser-reducer';

export const authReducers = combineReducers({
  user: userReducer,
  token: tokenUserReducer,
  isLoggedIn: loggedUserReducer,
  isFetchingCurrentUser: currentUserReducer,
});
