import { createReducer, combineReducers } from '@reduxjs/toolkit';
import initialState from 'redux/initialState';
import * as operations from 'redux/contacts/contacts-operations';
import * as actions from 'redux/contacts/contacts-action';

const itemsReducer = createReducer(initialState.contacts.items, {
  [operations.getContact.fulfilled]: (_, { payload }) => payload,
  [operations.addContact.fulfilled]: (state, { payload }) => [
    payload,
    ...state,
  ],
  [operations.deleteContact.fulfilled]: (state, { payload }) =>
    state.filter(element => element._id !== payload),
  [operations.editFavoriteContact.fulfilled]: (state, { payload }) =>
    state.map(element => (element._id === payload._id ? payload : element)),

  [operations.updateContact.fulfilled]: (state, { payload }) =>
    state.map(element => (element._id === payload._id ? payload : element)),

  [operations.deleteAvatarContact.fulfilled]: (state, { payload }) =>
    state.map(element => (element._id === payload._id ? payload : element)),
});

const filterReducer = createReducer(initialState.contacts.filter, {
  [actions.filterContact]: (_, { payload }) => payload,
});

export const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
