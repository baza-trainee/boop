import { useTranslations } from 'next-intl';

const Vision = () => {
  const t = useTranslations('Vision');

  return (
    <section className="container mb-[70px] flex w-full flex-col items-center justify-center gap-6 pb-6 text-center md:mb-[100px] ml:mb-[100px] xl:mb-[120px]">
      <h3 className="font-raleway text-xl font-bold leading-[132%] text-textViolet">
        {t('subtitle')}
      </h3>
      <h2 className="pt-6 title-gradient font-groppled text-[28px] font-bold leading-[160%] md:text-[32px] ml:text-5xl ml:leading-[124%] lg:w-[1056px]">
        {t('text')}
      </h2>
    </section>
  );
};

export default Vision;
