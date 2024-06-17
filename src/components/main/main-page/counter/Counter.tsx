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
        <ul className="mx-auto flex max-w-[1075px] justify-between gap-[20px]">
          {counterItems?.map(({ id, number, text }) => (
            <CounterItem key={id} number={number} text={text} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Counter;
