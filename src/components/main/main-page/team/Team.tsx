'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Carousel } from '../../shared/carousel/Carousel';
import { teamApi } from '@/store/api/teamApi';
import TeamMatesCard from './teamMatesCard/TeamMatesCard';
import SectionTitle from '@/components/main/shared/SectionTitle';
import CarouselButton from '../../shared/carousel/carousel-button/CarouselButton';
import AnimatedTeamMan from './AnimatedTeamMan';

const Team = () => {
  const t = useTranslations('About.team');

  const { data: teamMates } = teamApi.useGetAllTeamQuery();

  return (
    <section className="container mb-[120px] flex flex-col gap-[48px]">
      <SectionTitle title={t('title')} />
      <div className="] flex flex-col gap-5 ml:flex-row">
        <div className="flex flex-col">
          <div className="flex flex-col gap-5 px-0 md:flex-row">
            <Image
              src="/images/teamSection/boopTeam.jpg"
              alt="teams photo"
              width={350}
              height={306}
              className="h-[306px] w-[350px] object-cover md:h-[290px] md:w-[332px] lg:h-[415px] lg:w-[564px]"
            />
            <p className="font-raleway text-[16px] text-textViolet md:text-[18px] ml:text-[20px]">
              {t('text_1')}
            </p>
          </div>
          <div className="hidden flex-row items-end px-20 py-5 font-raleway md:block ml:pl-[100px] ml:pr-0 lg:flex">
            <p className="py-10 text-[16px] text-textViolet md:text-[18px] ml:text-[20px] lg:px-10">
              {t('text_2')}
            </p>

            <div className="hidden w-[250px] cursor-pointer lg:block">
              <AnimatedTeamMan className="" />
            </div>
          </div>
        </div>
        <div className="flex h-[40vh] flex-row md:h-full md:flex-col ml:flex-row">
          <div className="items-center gap-0 gap-2 md:flex ml:block">
            <CarouselButton className="team-prev-el -rotate-90 md:-rotate-180 ml:-rotate-90" />
            <CarouselButton className="team-next-el rotate-90 md:rotate-0 ml:rotate-90" />
          </div>
          {teamMates?.data.length && (
            <div className="h-[40vh] overflow-hidden md:h-full">
              <Carousel
                items={teamMates.data}
                autoHeight={true}
                prevEl=".team-prev-el"
                nextEl=".team-next-el"
                spaceBetween={20}
                speed={900}
                effect={'fade'}
                isDraggable={false}
                slideClassName="teamSlide"
                breakpoints={{
                  390: {
                    direction: 'vertical',
                    slidesPerView: 1,
                  },
                  768: {
                    direction: 'horizontal',
                    slidesPerView: 3,
                  },
                  1024: {
                    direction: 'vertical',
                    slidesPerView: 'auto',
                  },
                }}
                renderItem={(item) => (
                  <div className="teamSlide relative flex flex-col gap-[24px] md:flex-row ml:flex-col">
                    <TeamMatesCard {...item} />
                  </div>
                )}
              />
            </div>
          )}
        </div>
        <div className="block py-5 md:hidden">
          <span>{t('text_2')}</span>
          <Image
            className="hidden lg:block"
            src="/images/teamSection/clown.svg"
            alt="yellow clown"
            width={216}
            height={192}
          />
        </div>
      </div>
    </section>
  );
};

export default Team;
