import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useMediaQuery } from 'react-responsive';
import MissionCard from './missionCard/MIssionCard';
import SectionTitle from '../../shared/SectionTitle';
import GetMissionCardsInfo from './MissionCardsInfo';


const Mission = () => {
  const t = useTranslations('Mission');
  const missionCards = GetMissionCardsInfo();
  const isTablet = useMediaQuery({
    query: '(min-width: 500px) and (max-width: 1023px)',
  });

  return (
    <section className="mb-[70px] w-full bg-inherit md:mb-[100px] ml:mb-[100px] xl:mb-[120px]">
      <div className="container relative flex flex-col gap-8">
        <SectionTitle title={t('title')} />
        {isTablet && (
          <Image
            src="/images/missionSection/tablet_background.png"
            alt=""
            width={307}
            height={969}
            className="absolute right-0 top-[-165px] z-0"
          />
        )}
        <ul className="flex w-full flex-col items-center justify-center gap-8 md:h-[765px] md:w-[600px] md:flex-wrap md:items-start md:gap-x-8 ml:h-auto ml:w-full ml:flex-row ml:justify-between">
          {missionCards.map((el, index) => {
            return (
              <li
                key={index}
                className="flex w-full flex-1 justify-center md:w-auto md:flex-none md:justify-start ml:flex-1 ml:justify-center"
              >
                <MissionCard card={el} index={index} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Mission;
