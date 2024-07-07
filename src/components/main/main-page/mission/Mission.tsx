import React from 'react';

import { useTranslations } from 'next-intl';
import MissionCard from './missionCard/MIssionCard';
import SectionTitle from '../../shared/SectionTitle';
import GetMissionCardsInfo from './MissionCardsInfo';
import { useMediaQuery } from 'react-responsive';
import CarouselButton from '../../shared/carousel/carousel-button/CarouselButton';
import { Carousel } from '../../shared/carousel/Carousel';

const Mission = () => {
  const t = useTranslations('Mission');
  const missionCards = GetMissionCardsInfo();
  const isTablet = useMediaQuery({
    query: '(min-width: 427px) and (max-width: 1023px)',
  });

  return (
    <section className=" w-full  bg-inherit xs:mb-[70px]    md:mb-[88px] ml:mb-[100px] xl:mb-[120px]   2xl:pb-[104px]  2xl:pt-[60px]">
      <div className="container flex flex-col gap-8">
        <SectionTitle title={t('title')} />{' '}
        {isTablet ? (
          <div>
            <div className="flex items-center  gap-2 pb-6">
              <CarouselButton className="mission-prev-el rotate-180" />
              <CarouselButton className="mission-next-el" />
            </div>
            <Carousel
              items={missionCards}
              prevEl=".mission-prev-el"
              nextEl=".mission-next-el"
              slidesPerView={2}
              speed={500}
              spaceBetween={36}
              renderItem={(item, index) => (
                <div className="relative h-[412px]  flex-1  sm:w-full md:w-[306px]">
                  <MissionCard card={item} index={index} />
                </div>
              )}
            />
          </div>
        ) : (
          <ul className="flex w-full items-center justify-center gap-8 xs:flex-col md:flex-row md:flex-wrap md:justify-between  md:gap-y-12">
            {missionCards.map((el, index) => {
              return (
                <li
                  key={index}
                  className="flex w-full flex-1 justify-center md:w-auto"
                >
                  <MissionCard card={el} index={index} />
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </section>
  );
};

export default Mission;
