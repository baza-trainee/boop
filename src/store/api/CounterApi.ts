import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const counterApi = createApi({
  reducerPath: 'counterApi',
  tagTypes: ['Counter'],
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
  endpoints: (build) => ({
    getNumbers: build.query<string, string>({
      query: () => `counter`,
      providesTags: ['Counter'],
    }),
  }),
});

export const { useGetNumbersQuery } = counterApi;
