import React from 'react';
import SectionTitle from '../../shared/SectionTitle';

const Introduction = () => {
  return (
    <div className="bg-bgWhite">
      <SectionTitle title="Школа Клоунів" />
      <p
        className="font-raleway font-normal text-textViolet
      3xl:text-xl 3xl:leading-normal"
      >
        Школа лікарняної клоунади - це спільний проєкт БУП - <br />
        бюро усмішок і підтримки і «Таблеточок»
      </p>
      <div className="bg-amber-300 3xl:h-[440px] 3xl:w-[564px]"></div>
      <div className="bg-emerald-400 3xl:h-[324px] 3xl:w-[502px]"></div>
      <div className="bg-indigo-400 3xl:h-[400px] 3xl:w-[306px]"></div>
    </div>
  );
};

export default Introduction;
