import { IPhoto } from '@/types/photo';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const photoApi = createApi({
  reducerPath: 'photoApi',
  tagTypes: ['Photo'],
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
  endpoints: (build) => ({
    getAllPhoto: build.query<IPhoto[], string>({
      query: () => `photo`,
      providesTags: ['Photo'],
    }),

    getPhotoById: build.query<IPhoto, string>({
      query: (id) => `photo/${id}`,
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
  useGetPhotoByIdQuery,
  useAddPhotoMutation,
  useEditPhotoMutation,
  useDeletePhotoMutation,
} = photoApi;
