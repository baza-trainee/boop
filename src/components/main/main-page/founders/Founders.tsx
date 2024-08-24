import Image from 'next/image';
import { useTranslations } from 'next-intl';

const Founders = () => {
  const t = useTranslations('Founders');

  return (
    <section className="container mb-[70px] flex max-w-screen-3xl flex-col-reverse items-center justify-center gap-8 whitespace-pre bg-inherit md:mb-[88px] md:flex-row md:justify-between md:gap-[23px] ml:mb-[100px] xl:mb-[120px] 4xl:justify-center 4xl:gap-[200px]">
      <div className="relative ml:w-[513px] lg:w-fit">
        <picture>
          <source
            media="(max-width: 1023px)"
            srcSet="/images/founders_image_xs.webp"
          />
          <source
            media="(max-width: 1536px)"
            srcSet="/images/founders_image.webp"
          />
          <Image
            src="/images/founders_image.webp"
            alt=""
            width={686}
            height={782}
            className="bg-yellow lg:h-auto lg:w-[636px] 4xl:w-[686px]"
            priority={true}
          />
        </picture>
        <span className="absolute bottom-0 right-0 hidden h-4 w-[163px] origin-top-left translate-x-[calc(100%+2px)] translate-y-full -rotate-90 text-left font-raleway text-[12px] font-semibold leading-[132%] text-textViolet ml:block">
          {t('caption')}
        </span>
      </div>

      <div className="flex flex-col gap-4 pl-5 md:pl-0 ml:w-[359px] lg:w-fit">
        <h3 className="font-raleway text-xl font-[500] leading-[132%] text-mainViolet">
          {t('subtitle')}
        </h3>
        <h2 className="title-gradient font-groppled text-[28px] font-bold leading-[160%] md:text-[32px] lg:text-5xl xl:w-[500px] xl:leading-[110%]">
          {t('title')}
        </h2>
        <p className="w-[308px] font-raleway text-xl font-bold leading-[132%] text-textViolet xl:w-[350px]">
          {t('text')}
        </p>
      </div>
    </section>
  );
};

export default Founders;
