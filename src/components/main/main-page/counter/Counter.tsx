import React from 'react';
import SectionTitle from '../../shared/SectionTitle';
import { counterItems } from './item';
import CounterItem from './counter-item/CounterItem';

const Counter = () => {
  return (
    <section>
      <div className="container">
        <SectionTitle title={'Досягнення в цифрах'} />
      </div>
      <div className="mt-8 bg-beige pb-[75px] pt-[75px]">
        <ul className="container mx-auto flex flex-wrap justify-between gap-[20px] [&>*:nth-child(n+2):nth-child(-n+4)]:text-yellow">
          {counterItems?.map(({ id, number, text }) => (
            <CounterItem
              key={id}
              number={number}
              text={text}
              variant={`${id}`}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Counter;
