import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Pokemon } from '@/types';

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  tagTypes: ['pokemons'],
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (build) => ({
    getPokemons: build.query<Pokemon[], string>({
      query: () => `pokemon`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'pokemons' as const, id })),
              { type: 'pokemons', id: 'LIST' },
            ]
          : [{ type: 'pokemons', id: 'LIST' }],
    }),

    getPokemonByName: build.query<Pokemon, string>({
      query: (name) => `pokemon/${name}`,
    }),

    addPokemon: build.mutation({
      query: (body) => ({
        url: 'pokemon',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'pokemons', id: 'LIST' }],
    }),

    deletePokemon: build.mutation({
      query: (id) => ({
        url: `pokemon/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'pokemons', id: 'LIST' }],
    }),
  }),
});

export const {
  useGetPokemonsQuery,
  useGetPokemonByNameQuery,
  useAddPokemonMutation,
} = pokemonApi;
