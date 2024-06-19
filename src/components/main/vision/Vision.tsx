import React from 'react';
import { useTranslations } from 'next-intl';

const Vision = () => {
  const t = useTranslations('Vision');

  return (
    <section className=" mt-[120px] w-[1200px] flex-col items-center justify-center  gap-6 px-[77px] pb-6 text-center">
      <h3 className="font-raleway text-xl font-bold  leading-[132%] text-textViolet">
        {t('subtitle')}
      </h3>
      <h2 className="title-gradient font-groppled text-5xl font-bold leading-[124%]">
        {/* Ми прагнемо, аби в кожній дитячій лікарні України було місце для радості
        і посмішок дітей, які опинилися в складних та кризових ситуаціях. */}
        {t('text')}
      </h2>
    </section>
  );
};

export default Vision;
