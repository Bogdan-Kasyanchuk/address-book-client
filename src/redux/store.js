import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import { contactsReducer } from 'redux/contacts/contacts-reducers';
import { authReducers } from 'redux/auth/auth-reducers';
import { loadingReducer } from 'redux/loading-reducer';
import { errorReducer } from 'redux/error-reducer';
import middleware from 'redux/middleware';
import persistConfig from 'redux/persistConfig';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    auth: persistReducer(persistConfig, authReducers),
    loading: loadingReducer,
    error: errorReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware(middleware),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
