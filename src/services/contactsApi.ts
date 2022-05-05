import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Contact } from '../models/contact.model';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  tagTypes: ['contacts'],
  endpoints: (builder) => ({
    getContacts: builder.query<Contact[], void>({
      query: () => '/contacts',
      providesTags: ['contacts'],
    }),

    getContact: builder.query<Contact, number>({
      query: (id) => `/contacts/${id}`,
      providesTags: ['contacts'],
    }),

    addContact: builder.mutation<void, Contact>({
      query: (contact) => ({
        url: '/contacts',
        method: 'POST',
        body: contact,
      }),
      invalidatesTags: ['contacts'],
    }),

    updateContact: builder.mutation<void, Contact>({
      query: ({ id, ...rest }) => ({
        url: `/contacts/${id}`,
        method: 'PUT',
        body: rest,
      }),
      invalidatesTags: ['contacts'],
    }),

    deleteContact: builder.mutation<void, number>({
      query: (id) => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['contacts'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useGetContactQuery,
  useAddContactMutation,
  useUpdateContactMutation,
  useDeleteContactMutation,
} = contactsApi;
