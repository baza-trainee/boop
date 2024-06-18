import { IPhoto } from '@/types/photo';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const photoApi = createApi({
  reducerPath: 'photoApi',
  tagTypes: ['Photo'],
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
  endpoints: (build) => ({
    getAllPhoto: build.query<IPhoto[], string>({
      query: () => `photo`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Photo' as const, id })),
              { type: 'Photo', id: 'LIST' },
            ]
          : [{ type: 'Photo', id: 'LIST' }],
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
      invalidatesTags: [{ type: 'Photo', id: 'LIST' }],
    }),

    deletePhoto: build.mutation({
      query: (id) => ({
        url: `photo/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Photo', id: 'LIST' }],
    }),
  }),
});

export const {
  useGetAllPhotoQuery,
  useGetPhotoByIdQuery,
  useAddPhotoMutation,
  useDeletePhotoMutation,
} = photoApi;
