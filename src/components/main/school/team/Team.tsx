import SectionTitle from "@/components/main/shared/SectionTitle";
import { useTranslations } from "next-intl";
import Image from "next/image";
import CarouselButton from "../../shared/carousel/carousel-button/CarouselButton";
import { Carousel } from "../../shared/carousel/Carousel";
import { teamMatesItems } from "./items";
import TeamMatesCard from "./teamMatesCard/TeamMatesCard";
import React from 'react';

const Team = () => {
  const t = useTranslations('About.team');

  return(
    <section className="container flex flex-col gap-[48px] mb-[120px]">
      <SectionTitle title={t('title')} />
      <div className="grid grid-cols-4 grid-rows-2 h-full">
        <div className="col-span-3 row-span-1  flex flex-row gap-[24px] ">
            <div className="relative w-[636px] h-[456px]">
              <Image
                src="/images/teamSection/team.png" 
                alt="teams photo"
                fill
                sizes="100%"
              />
            </div>
            <div className="w-[306px] h-[330px] font-raleway text-[20px]">
              <span>{t("text_1")}</span>
            </div>
        </div>
        <div className="col-span-1 row-span-2 w-full h-[918px] ">
          <Carousel
            autoHeight={true}
            items={teamMatesItems}
            prevEl=".team-prev-el"
            nextEl=".team-next-el"
            slidesPerView={1}
            spaceBetween={30}
            direction={"vertical"}
            speed={900}
            effect={'fade'}
            loop={true}
            renderItem={(partnerItems) => {
              return(
              <div className="relative flex flex-col gap-[24px] w-[400px]">
                {partnerItems.map((item) => (
                  <TeamMatesCard
                    key={item.id}
                    imgSrc={item.imgSrc}
                    name={item.name}
                  />
                  ))}
              </div>
              )}}
              />
        </div> 
        <div className="col-span-2 row-span-1 font-raleway text-[20px] pl-28">
            <span>{t("text_2")}</span> 
        </div>
        <div className="col-span-1 row-span-1 flex flex-row justify-end items-end gap-16">
          <Image
            src="/images/teamSection/clown.svg"
            alt="yellow clown"
            width={216}
            height={192}
          />
          <div>
            <CarouselButton  className="team-prev-el -rotate-90 " />
            <CarouselButton  className="team-next-el rotate-90" />
          </div>
        </div>
      </div>
    </section>
  )
};

export default Team;
