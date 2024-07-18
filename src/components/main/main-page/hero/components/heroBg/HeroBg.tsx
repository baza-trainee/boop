import React from 'react';
import Image from 'next/image';

const HeroBg = () => {
  return (
    <picture>
      <source
        media="(max-width: 650px)"
        srcSet="/images/heroSection/hero_bg_xs.svg"
      />
      <source
        media="(max-width: 1023px)"
        srcSet="/images/heroSection/hero_bg_md.svg"
      />
      <source
        media="(max-width: 1279px)"
        srcSet="/images/heroSection/hero_bg_ml.svg"
      />
      <source
        media="(max-width: 2560px)"
        srcSet="/images/heroSection/hero_bg_3xl.svg"
      />

      <Image
        src="/images/heroSection/hero_bg_3xl.svg"
        alt="BOOP"
        width={1173}
        height={1375}
        className="absolute -top-[73px] left-12  z-[2] w-[567px] blur-[1px] custom:left-[100px] custom:h-[900px] custom:w-[869px] md:-top-[128px] md:left-[158px] md:h-auto md:w-[869px] ml:left-[155px] ml:top-0 ml:h-[1008px] ml:w-[868px] lg:h-[1190px] lg:w-[963px] xl:left-[190px] xl:h-[1190px] xl:w-[974px] 2xl:left-[230px] 3xl:left-[535px] 3xl:top-0 3xl:h-[1090px] 3xl:w-[996px] 4xl:left-[743px]  4xl:h-[1380px] 4xl:w-[1173px]
        "
      />
    </picture>
  );
};

export default HeroBg;
