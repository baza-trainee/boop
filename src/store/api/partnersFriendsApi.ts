import { PartnersFriends } from '@/types/partners-friends';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const partnersFriendsApi = createApi({
  reducerPath: 'partnersFriendsApi',
  tagTypes: ['PartnersFriends'],
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
  endpoints: (build) => ({
    getAllPartnersFriends: build.query<PartnersFriends[], void>({
      query: () => `partners-friends`,
      providesTags: ['PartnersFriends'],
    }),

    addPartnersFriends: build.mutation({
      query: (body) => ({
        url: 'partners-friends',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['PartnersFriends'],
    }),

    editPartnersFriends: build.mutation({
      query: ({ id, ...data }) => ({
        url: `partners-friends/${id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['PartnersFriends'],
    }),

    deletePartnersFriends: build.mutation({
      query: (id) => ({
        url: `partners-friends/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['PartnersFriends'],
    }),
  }),
});

export const {
  useGetAllPartnersFriendsQuery,
  useEditPartnersFriendsMutation,
  useAddPartnersFriendsMutation,
  useDeletePartnersFriendsMutation,
} = partnersFriendsApi;
