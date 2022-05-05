import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Contact } from '../models/contact.model';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  endpoints: (builder) => ({
    getContacts: builder.query<Contact[], void>({
      query: () => '/contacts',
    }),
    getContact: builder.query<Contact, number>({
      query: (id) => `/contacts/${id}`,
    }),
  }),
});

export const { useGetContactsQuery, useGetContactQuery } = contactsApi;
