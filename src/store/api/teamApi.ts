import { ITeamMember } from '@/types/team';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const teamApi = createApi({
  reducerPath: 'teamApi',
  tagTypes: ['Team'],
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
  endpoints: (build) => ({
    getAllTeam: build.query<ITeamMember[], string>({
      query: () => `team`,
      providesTags: ['Team'],
    }),

    getTeamMemberById: build.query<ITeamMember, string>({
      query: (id) => `team/${id}`,
    }),

    addTeamMember: build.mutation({
      query: (body) => ({
        url: 'team',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Team'],
    }),

    editTeamMember: build.mutation({
      query: ({ id, ...data }) => ({
        url: `team/${id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['Team'],
    }),

    deleteTeamMember: build.mutation({
      query: (id) => ({
        url: `team/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Team'],
    }),
  }),
});

export const {
  useGetAllTeamQuery,
  useGetTeamMemberByIdQuery,
  useAddTeamMemberMutation,
  useEditTeamMemberMutation,
  useDeleteTeamMemberMutation,
} = teamApi;
