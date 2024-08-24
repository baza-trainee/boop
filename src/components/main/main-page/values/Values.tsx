import { useTranslations } from 'next-intl';
import SectionTitle from '../../shared/SectionTitle';
import ValueCard from './valueCard/ValueCard';
import GetValuesCardsInfo from './ValuesCardsInfo';

const Values = () => {
  const t = useTranslations('Values');
  const valuesCards = GetValuesCardsInfo();

  return (
    <section className="mb-[70px] flex w-full flex-col gap-8 md:mb-[100px] ml:mb-[100px] xl:mb-[120px]">
      <div className="container">
        <SectionTitle title={t('title')} />
      </div>

      <div className="ml:pt-[50px]md:pb-[125px] flex w-full items-center justify-center bg-bgYellow pb-[92px] pt-8 md:pb-[122px] md:pt-[42px] ml:pb-[108px] lg:pb-[112px] lg:pt-[62px] xl:pt-[65px] 2xl:pb-[123px] 2xl:pt-[55px]">
        <ul className="mx-auto flex w-full max-w-[1920px] flex-col items-stretch justify-between gap-[70px] px-[20px] custom:px-[80px] md:h-[160px] md:flex-row md:flex-wrap md:items-start md:justify-around md:px-[64px] ml:gap-[56px] lg:px-[64px] xl:px-[80px] 2xl:gap-[48px] 2xl:px-[120px]">
          {valuesCards.map((el, index) => {
            return (
              <li
                key={index}
                className={`flex w-full md:w-auto ml:w-[251px] xl:w-[29%] ${
                  index === 2
                    ? 'order-3 md:order-2 ml:flex-row-reverse'
                    : index === 3
                      ? 'order-2 md:order-3 ml:flex-row-reverse xl:relative xl:right-12'
                      : index === 4
                        ? 'order-4'
                        : index === 1
                          ? 'ml:justify-center'
                          : ''
                }`}
              >
                <ValueCard card={el} index={index} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Values;
