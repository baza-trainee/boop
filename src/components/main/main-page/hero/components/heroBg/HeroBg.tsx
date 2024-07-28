import React from 'react';
import Image from 'next/image';

const HeroBg = () => {
  return (
    <picture>
      <source
        media="(max-width: 650px)"
        srcSet="/images/heroSection/hero_bg_xs_light.png"
      />
      <source
        media="(max-width: 1023px)"
        srcSet="/images/heroSection/hero_bg_md_light.png"
      />
      <source
        media="(max-width: 1279px)"
        srcSet="/images/heroSection/hero_bg_ml_light.png"
      />
      <source
        media="(max-width: 1919px)"
        srcSet="/images/heroSection/hero_bg_3xl_light.png"
      />
      <source
        media="(max-width: 2560px)"
        srcSet="/images/heroSection/hero_bg_4xl_light.png"
      />

      <Image
        src="/images/heroSection/hero_bg_4xl_light.png"
        alt="BOOP"
        width={1455}
        height={1549}
        loading="eager"
        className="absolute -top-[73px] left-[70px] z-[2] h-auto w-[608px] custom:-top-[189px] custom:left-[160px] custom:w-[836px] md:-top-[149px] md:left-[163px] md:w-[836px] ml:-top-[139px] ml:left-[173px] ml:w-[1044px] lg:-top-[165px] lg:left-[253px] lg:w-[1205px] xl:-top-[175px] 3xl:-top-[213px] 3xl:left-[525px] 4xl:-top-[223px] 4xl:left-[725px] 4xl:w-[1455px]"
      />
    </picture>
  );
};

export default HeroBg;
