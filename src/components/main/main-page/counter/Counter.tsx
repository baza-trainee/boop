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
      <div className="container mx-auto max-w-screen-3xl">
        <SectionTitle
          title={t('title')}
          className="[&>svg]:hidden sm:[&>svg]:block"
        />
      </div>
      <div className="mt-8 py-[30px] sm:bg-beige sm:py-[75px]">
        {isFetching && <p className="container">Loading...</p>}
        {!isFetching && counterItems && (
          <ul className="container mx-auto flex max-w-screen-3xl flex-col flex-wrap sm:flex-row sm:justify-center sm:gap-10 ml:justify-between ml:gap-[18px] [&>*:nth-child(n+2):nth-child(-n+4)]:text-yellow">
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
