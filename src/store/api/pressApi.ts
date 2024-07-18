import { ListResponse } from '@/types';
import { INews } from '@/types/news';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const pressApi = createApi({
  reducerPath: 'pressApi',
  tagTypes: ['Press'],
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
  endpoints: (build) => ({
    getAllPress: build.query<
      ListResponse<INews>,
      { page?: number; limit?: number } | void
    >({
      query: ({ page = 1, limit } = {}) => `news?page=${page}&limit=${limit}`,
      providesTags: ['Press'],
    }),
    addPressPost: build.mutation({
      query: (body) => ({
        url: 'news',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Press'],
    }),
    editPress: build.mutation({
      query: ({ id, ...data }) => ({
        url: `news/${id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['Press'],
    }),

    deletePress: build.mutation({
      query: (id) => ({
        url: `news/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Press'],
    }),
  }),
});

export const {
  useGetAllPressQuery,
  useAddPressPostMutation,
  useEditPressMutation,
  useDeletePressMutation,
} = pressApi;
