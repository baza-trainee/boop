import { IContact } from '@/types/contacts';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  tagTypes: ['Contacts'],
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
  endpoints: (build) => ({
    getAllContacts: build.query<IContact[], string>({
      query: () => `contacts`,
      providesTags: ['Contacts'],
    }),

    editContacts: build.mutation({
      query: ({ id, ...data }) => ({
        url: `contacts/${id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const { useGetAllContactsQuery, useEditContactsMutation } = contactsApi;
