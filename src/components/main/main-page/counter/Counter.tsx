import React from 'react';
import SectionTitle from '../../shared/SectionTitle';
import CounterItem from './counter-item/CounterItem';
import { useTranslations } from 'next-intl';
import { useGetAllNumbersQuery } from '@/store/api/counterApi';

const Counter = () => {
  const t = useTranslations('Counter_section');
  const { data: counterItems, isFetching, isError } = useGetAllNumbersQuery();

  return (
    <section className="mb-[120px]">
      <div className="container">
        <SectionTitle title={t('title')} />
      </div>
      <div className="mt-8 bg-beige pb-[75px] pt-[75px]">
        {isFetching && <p className="container">Loading...</p>}
        {isError && <p className="container">Something went wrong!</p>}
        {!isFetching && counterItems && (
          <ul className="container mx-auto flex flex-wrap justify-between gap-[20px] [&>*:nth-child(n+2):nth-child(-n+4)]:text-yellow">
            {counterItems?.map(({ id, number, text, variant }) => (
              <CounterItem
                key={id}
                number={number}
                text={t(text)}
                variant={variant}
              />
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default Counter;
