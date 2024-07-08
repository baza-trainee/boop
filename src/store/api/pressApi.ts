import { ListResponse } from '@/types';
import { INews } from '@/types/news';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const pressApi = createApi({
  reducerPath: 'pressApi',
  tagTypes: ['PRESS'],
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
  endpoints: (build) => ({
    getAllPress: build.query<
      ListResponse<INews>,
      { page?: number; limit?: number } | void
    >({
      query: ({ page = 1, limit } = {}) => `news?page=${page}&limit=${limit}`,
      providesTags: ['PRESS'],
    }),
  }),
});

export const { useGetAllPressQuery } = pressApi;
