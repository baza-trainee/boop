import { useTranslations } from 'next-intl';
import Image from 'next/image';

const Hospital_Clowning = () => {
  const t = useTranslations('About.hospital_clowning');

  const text = t('subtitle');
  const paragraphs = text.split('\n');

  return (
    <section className="mb-[70px] md:mb-[100px] ml:mb-[110px] lg:mb-[100px] xl:mb-[120px]">
      <div className="container md:px-10 ml:px-[64px] xl:px-[80px] 3xl:px-[120px]">
        <h2 className="title-gradient after:content-[''] mb-8 flex items-center justify-start gap-2 py-[2.5px] font-groppled text-2xl font-bold leading-[1.7] after:block after:h-[4px] after:w-[80px] after:-translate-y-3/4 after:bg-[url('/icons/school/title_line_desk.svg')] after:bg-no-repeat after:py-1 md:gap-8 md:py-[6px] ml:text-[32px] ml:leading-[1.6] lg:mb-10 4xl:mb-12">
          {t('title')}
        </h2>
        <div className="flex flex-col gap-6 font-raleway text-base leading-normal text-textViolet md:relative md:gap-4 md:text-lg lg:gap-0 lg:text-xl">
          <div className="order-2 text-pretty font-bold leading-[1.32] antialiased md:order-1 md:max-w-[47%] lg:mb-4 xl:mb-[19px] 3xl:mb-4 3xl:max-w-[43%] 4xl:max-w-[40%]">
            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <p className="order-2 md:order-1 md:w-1/2 3xl:max-w-[40%] 4xl:max-w-[41%]">
            {t('paragraph_1')}
          </p>
          <p className="order-2 md:order-1 md:w-1/2 lg:mb-4 lg:w-[49%] 3xl:mb-8 3xl:max-w-[40%] 4xl:max-w-[41%]">
            {t('paragraph_2')}
          </p>
          <p className="order-4 md:order-1 md:max-w-[421px] ml:ml-[77px] ml:max-w-[455px] lg:ml-[98px] lg:max-w-[760px] xl:ml-[103px] xl:max-w-[693px] 3xl:ml-[110px] 3xl:max-w-[600px] 4xl:ml-[285px] 4xl:max-w-[543px]">
            {t('paragraph_3')}
          </p>
          <p className="order-4 block md:order-1 md:m-auto md:max-w-[510px] ml:ml-[77px] ml:max-w-[471px] lg:ml-[98px] lg:max-w-[761px] xl:ml-[103px] xl:max-w-[693px] 3xl:ml-[110px] 3xl:max-w-[600px] 4xl:ml-[285px] 4xl:max-w-[543px]">
            {t('paragraph_4')}
          </p>

          {/* Top Image */}
          <Image
            src="/images/about/top@2x.jpg"
            alt={'image'}
            width={306}
            height={370}
            className="order-1 m-auto h-[417px] w-[350px] md:absolute md:right-0 md:h-[402px] md:w-[332px] ml:right-[153px] ml:h-[342px] ml:w-[283px] lg:right-[294px] lg:h-[327px] lg:w-[270px] xl:right-[307px] xl:h-[344px] xl:w-[284px] 3xl:right-[330px] 3xl:h-[370px] 3xl:w-[306px] 4xl:right-[426px] 4xl:h-[486px] 4xl:w-[402px]"
          />

          {/* Bottom Image */}
          <Image
            src="/images/about/bottom@2x.jpg"
            alt={'image'}
            width={306}
            height={370}
            className="order-3 h-[422px] w-[350px] md:absolute md:bottom-[150px] md:right-0 md:m-auto md:h-[293px] md:w-[243px] ml:bottom-0 ml:h-[342px] ml:w-[283px] lg:bottom-[147px] lg:h-[326px] lg:w-[270px] xl:bottom-[92px] xl:h-[342px] xl:w-[283px] 3xl:bottom-[156px] 3xl:h-[370px] 3xl:w-[306px] 4xl:bottom-0 4xl:h-[485px] 4xl:w-[402px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hospital_Clowning;
