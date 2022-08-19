import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from '../redux/Api';
// import { setupListeners } from '@reduxjs/toolkit/query';
// import { contactsSlice } from 'redux/ContactsSlice';

export const store = configureStore({
    reducer: {
        
        // contacts: contactsSlice,
        [contactsApi.reducerPath]: contactsApi.reducer,
    },
    middleware: getDefaultMiddleware =>
        [...getDefaultMiddleware(), contactsApi.middleware],
});



