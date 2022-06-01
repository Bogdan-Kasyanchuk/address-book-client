import { createReducer } from '@reduxjs/toolkit';
import initialState from 'redux/initialState';
import * as contactsOperations from 'redux/contacts/contacts-operations';
import * as authOperations from 'redux/auth/auth-operations';

export const errorReducer = createReducer(initialState.error, {
  [contactsOperations.getContact.rejected]: (_, { payload }) => payload,
  [contactsOperations.getContact.pending]: () => null,
  [contactsOperations.addContact.rejected]: (_, { payload }) => payload,
  [contactsOperations.addContact.pending]: () => null,
  [contactsOperations.deleteContact.rejected]: (_, { payload }) => payload,
  [contactsOperations.deleteContact.pending]: () => null,
  [contactsOperations.editFavoriteContact.rejected]: (_, { payload }) =>
    payload,
  [contactsOperations.editFavoriteContact.pending]: () => null,
  [contactsOperations.updateContact.rejected]: (_, { payload }) => payload,
  [contactsOperations.updateContact.pending]: () => null,
  [contactsOperations.deleteAvatarContact.rejected]: (_, { payload }) =>
    payload,
  [contactsOperations.deleteAvatarContact.pending]: () => null,
  [authOperations.registerUser.rejected]: (_, { payload }) => payload,
  [authOperations.registerUser.pending]: () => null,
  [authOperations.logInUser.rejected]: (_, { payload }) => payload,
  [authOperations.logInUser.pending]: () => null,
  [authOperations.logOutUser.rejected]: (_, { payload }) => payload,
  [authOperations.logOutUser.pending]: () => null,
  [authOperations.currentUser.rejected]: (_, { payload }) => payload,
  [authOperations.currentUser.pending]: () => null,
  [authOperations.updateUser.rejected]: (_, { payload }) => payload,
  [authOperations.updateUser.pending]: () => null,
  [authOperations.deleteAvatarUser.rejected]: (_, { payload }) => payload,
  [authOperations.deleteAvatarUser.pending]: () => null,
});
