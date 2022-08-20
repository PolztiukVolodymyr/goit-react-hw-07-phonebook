import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from '../redux/Api';

export const store = configureStore({
    reducer: {
        
        // contacts: contactsSlice,
        [contactsApi.reducerPath]: contactsApi.reducer,
    },
    middleware: getDefaultMiddleware =>
        [...getDefaultMiddleware(), contactsApi.middleware],
});



