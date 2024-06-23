import { CounterData } from '@/types/counter';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const counterApi = createApi({
  reducerPath: 'counterApi',
  tagTypes: ['Counter'],
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
  endpoints: (build) => ({
    getAllNumbers: build.query<CounterData, void>({
      query: () => `counter`,
      providesTags: ['Counter'],
    }),
  }),
});

export const { useGetAllNumbersQuery } = counterApi;
