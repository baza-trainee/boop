import React from 'react';

import CarouselButton from '../../../shared/carousel/carousel-button/CarouselButton';
import { Carousel } from '../../../shared/carousel/Carousel';
import SectionTitle from '../../../shared/SectionTitle';
import Image from 'next/image';

type PartnerItem = {
  id: string;
  link: string;
  logoId: string;
  logoUrl: string;
  section: string;
};

type PartnersListProps = {
  partnerItems?: PartnerItem[];
  title: string;
  sectionName: string;
};

const PartnersList: React.FC<PartnersListProps> = ({
  partnerItems = [],
  title,
  sectionName,
}) => {
  const isNavigated = partnerItems?.length > 6;
  const renderItems: PartnerItem[][] = partnerItems.reduce((result, item, index) => {
    const chunkIndex = Math.floor(index / 6);
    if (!result[chunkIndex]) {
      result[chunkIndex] = []; // Initialize a new chunk
    }
    result[chunkIndex].push(item);
    return result;
  }, [] as PartnerItem[][]);

  const partners = sectionName === 'partners';

  return (
    <div
      className={`flex w-full flex-col gap-8 px-5 py-[24px] md:pb-[55px] md:pt-10 ml:pb-6 lg:py-[55px] ${partners ? 'bg-bgYellow md:pl-4 md:pr-16 lg:pl-3 xl:pr-[80px] 2xl:pl-3 2xl:pr-[120px] 4xl:pl-1' : 'bg-bgViolet md:pl-16 md:pr-4 lg:pr-0 xl:pl-[80px] 2xl:pl-[120px] 2xl:pr-3 4xl:pr-1'}`}
    >
      <div className={`${partners ? '4xl:pl-4' : ''}`}>
        <SectionTitle title={title} />
      </div>

      <div className="flex">
        <div className="h-[237px] overflow-hidden md:h-[252px] ml:h-[309px] lg:h-[198px] 4xl:h-[237px]">
          <Carousel
            items={renderItems}
            prevEl={`.${sectionName}-prev-el`}
            nextEl={`.${sectionName}-next-el`}
            slidesPerView={1}
            speed={500}
            direction="vertical"
            spaceBetween={24}
            autoHeight={true}
            className=""
            renderItem={(items: PartnerItem[]) => {
              return (
                <div className="flex flex-wrap justify-between gap-y-6 custom:gap-x-6 md:gap-x-0 lg:justify-start lg:gap-x-[26px] xl:gap-x-10 2xl:gap-x-9 3xl:gap-x-0 4xl:gap-x-[37px]">
                  {items.map((item) => (
                    <a
                      key={item.id}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-[57px] w-[120px] cursor-pointer items-center justify-center xs:h-[63px] xs:w-[152px] md:h-[68px] md:w-[130px] ml:h-[87px] ml:w-[160px] 3xl:w-[196px] 4xl:h-[106px] 4xl:w-[240px]"
                    >
                      <Image
                        src={item.logoUrl}
                        alt={`Partner image`}
                        width={150}
                        height={150}
                        className="max-h-[100%] max-w-[100%] object-contain"
                      />
                    </a>
                  ))}
                </div>
              );
            }}
          />
        </div>

        <div
          className={`flex h-[69px] w-8 flex-col gap-[5px] self-end ${isNavigated ? 'visible' : 'invisible'}`}
        >
          <CarouselButton className={`${sectionName}-prev-el -rotate-90`} />
          <CarouselButton className={`${sectionName}-next-el rotate-90`} />
        </div>
      </div>
    </div>
  );
};

export default PartnersList;
