'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
// import {
//   useAddPokemonMutation,
//   useGetPokemonByNameQuery,
// } from '@/store/api/pokemonApi';

const MainPage = () => {
  const t = useTranslations();
  // const { data = [], isLoading } = useGetPokemonByNameQuery('pikachu');
  // const [addPokemon, { isError }] = useAddPokemonMutation();

  // const handleAddPokemon = async () => {
  //   const newPokemon = {
  //     id: 5,
  //     name: 'Raichu',
  //   };
  //   await addPokemon(newPokemon).unwrap();
  // };

  return (
    <div className="relative flex min-h-[100vh] w-full items-center justify-center">
      <h1 className="absolute bottom-20 left-[50%] -translate-x-[50%] text-5xl font-bold uppercase text-red-800">
        {t('hello')}
      </h1>
      <Image
        src={`/images/pennywise.jpg`}
        alt="pennywise"
        width={800}
        height={500}
      />
    </div>
  );
};

export default MainPage;
