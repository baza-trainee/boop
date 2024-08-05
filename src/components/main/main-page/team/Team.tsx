'use client';
import SectionTitle from '@/components/main/shared/SectionTitle';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import CarouselButton from '../../shared/carousel/carousel-button/CarouselButton';
import { Carousel } from '../../shared/carousel/Carousel';
import { teamMatesItems } from './items';
import TeamMatesCard from './teamMatesCard/TeamMatesCard';
import React from 'react';

const Team = () => {
  const t = useTranslations('About.team');

  return (
    <section className="container mb-[120px] flex flex-col gap-[48px]">
      <SectionTitle title={t('title')} />
      <div className="flex flex-col gap-5 ml:flex-row ]">
        <div className="flex flex-col ">
          <div className='flex flex-col md:flex-row gap-5 px-0'>
            <Image
              src="/images/teamSection/team.png"
              alt="teams photo"
              width={350}
              height={306}
              className='w-[350px] h-[306px] md:w-[332px] md:h-[290px] lg:w-[564px] lg:h-[415px]'
            />
            <p className="font-raleway text-textViolet text-[16px] md:text-[18px] ml:text-[20px]">
              {t('text_1')}
            </p>
          </div>
          <div className='hidden md:block font-raleway px-20 lg:flex flex-row items-end py-5'>
            <p className='text-[16px] text-textViolet md:text-[18px] lg:px-10 py-10 ml:text-[20px]'>{t('text_2')}</p>
            <Image
              className="hidden lg:block"
              src="/images/teamSection/clown.svg"
              alt="yellow clown"
              width={216}
              height={192}
            />
          </div>
        </div>
        <div className='flex flex-row md:flex-col ml:flex-row h-full'>
        <div className='md:flex items-center gap-2 ml:block gap-0'>
            <CarouselButton className="team-prev-el -rotate-90 md:-rotate-180 ml:-rotate-90" />
            <CarouselButton className="team-next-el rotate-90 md:rotate-0 ml:rotate-90" />
          </div>
          <div className='overflow-hidden h-full'>
            <Carousel
              items={teamMatesItems}
              autoHeight={true}
              prevEl=".team-prev-el"
              nextEl=".team-next-el"
              spaceBetween={20}
              speed={900}
              effect={'fade'}
              breakpoints={{
                390: {
                  direction: "vertical",
                  slidesPerView: 1,
                },
                768: {
                  direction: "horizontal",
                  slidesPerView: 3,
                },
                1024: {
                  direction: "vertical", 
                  slidesPerView: "auto", 
                }
              }}
              renderItem={(item) => 
                <div className="relative flex flex-col  md:flex-row gap-[24px] ml:flex-col">
                  <TeamMatesCard {...item}/>
                </div>
              }
            />
          </div>
        </div>
        <div className='block py-5 md:hidden'>
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
