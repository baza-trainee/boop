import { ListResponse } from '@/types';
import { IPhoto } from '@/types/photo';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const photoApi = createApi({
  reducerPath: 'photoApi',
  tagTypes: ['Photo'],
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
  endpoints: (build) => ({
    getAllPhoto: build.query<
      ListResponse<IPhoto>,
      { page?: number; limit?: number } | void
    >({
      query: ({ page = 1, limit } = {}) => `photo?page=${page}&limit=${limit}`,
      providesTags: ['Photo'],
    }),

    addPhoto: build.mutation({
      query: (body) => ({
        url: 'photo',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Photo'],
    }),

    editPhoto: build.mutation({
      query: ({ id, ...data }) => ({
        url: `photo/${id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['Photo'],
    }),

    deletePhoto: build.mutation({
      query: (id) => ({
        url: `photo/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Photo'],
    }),
  }),
});

export const {
  useGetAllPhotoQuery,
  useAddPhotoMutation,
  useEditPhotoMutation,
  useDeletePhotoMutation,
} = photoApi;
