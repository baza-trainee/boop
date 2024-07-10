import React from 'react';
import Image from 'next/image';

import { useLocale, useTranslations } from 'next-intl';
import { useMediaQuery } from 'react-responsive';

const Hero = () => {
  const t = useTranslations('Hero');
  const locale = useLocale();
  const isMobile = useMediaQuery({
    query: '(max-width:767px)',
  });

  return (
    <section className=" container relative mx-auto box-border flex   max-w-screen-3xl flex-col items-center  justify-center pt-14 ">
      {/* <Image
        src="/images/heroSection/hero_bg_xs.svg"
        alt=""
        width={390}
        height={711}
        className="absolute -top-2 right-0 z-[2] h-[711px] w-[390px] 
        "
        
      /> */}

      {/* <div className="relative h-[733px] w-[878px] items-center justify-center ">
        {!isMobile && (
          <>
            <Image
              src="/images/heroSection/orange_circle.png"
              alt=""
              width={329}
              height={329}
              className="absolute left-0 top-[107px] z-0"
            />

            <Image
              src="/images/heroSection/purpul_circle.png"
              alt=""
              width={213}
              height={213}
              className="absolute  bottom-0 right-[244px] z-10"
            />
            <Image
              src="/images/heroSection/red_circle.png"
              alt=""
              width={213}
              height={213}
              className="absolute  right-0 top-0 z-10"
            />
          </>
        )} */}
      <div
        className={` flex w-[247px] flex-col items-center justify-center md:w-[341px] ${locale === 'en' ? 'gap-3' : 'gap-6'} `}
      >
        <picture>
          <source
            media="(max-width: 767px)"
            srcSet="/images/heroSection/hero_bg_xs.svg"
          />
          <source
            media="(max-width: 1024px)"
            srcSet="/images/heroSection/hero_bg_md.svg"
          />
          <Image
            src="/images/heroSection/hero_bg_md.svg"
            alt="Responsive Hero Logo"
            width={1173} // Максимальная ширина изображения
            height={1375} // Максимальная высота изображения
            className="relative -top-2 right-0 z-[2] 
        "
          />
        </picture>
        {/* <svg
          className="relative -right-20 -top-20 z-[2] h-[711px] w-[390px]  md:h-[944px] md:w-[868px]"
          xmlns="http://www.w3.org/2000/svg"
          width="1173"
          height="1375"
          viewBox="0 0 1173 1375"
          fill="none"
        >
          <g filter="url(#filter0_bd_2287_14918)">
            <path
              d="M104.664 -108.72C104.664 -108.72 190.476 11.5909 245.312 73.7117C284.137 117.693 319.161 140.677 364.215 169.934C518.788 270.311 661.9 251.316 853.296 300.983C931.645 321.314 1017.27 350.495 1047.57 443.478C1058.33 476.517 1057.41 529.122 1025 577.429C990.326 629.12 925.38 657.902 864.033 658.809C617.737 662.45 529.051 476.752 292.54 475.324C248.228 475.057 208.866 485.116 173.804 514.127C120.268 558.424 101.232 629.625 133.985 691.153C151.293 723.666 177.309 747.362 214.488 766.617C389.421 857.209 526.653 839.704 736.259 897.133C792.05 912.418 831.292 924.639 895.106 951.99C954.433 977.417 1015.55 1010.46 1050.42 1030.83C1116.75 1069.58 1145.64 1090.13 1215.1 1140.29C1289.05 1193.69 1366.96 1253.27 1366.96 1253.27"
              stroke="url(#paint0_linear_2287_14918)"
              stroke-opacity="0.75"
              stroke-width="155"
              shape-rendering="crispEdges"
            />
          </g>
          <defs>
            <filter
              id="filter0_bd_2287_14918"
              x="0.238281"
              y="-173.725"
              width="1453.8"
              height="1548.55"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="5" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_2287_14918"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="20" />
              <feGaussianBlur stdDeviation="20" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.405844 0 0 0 0 0.377416 0 0 0 0 0.578597 0 0 0 0.35 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_backgroundBlur_2287_14918"
                result="effect2_dropShadow_2287_14918"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect2_dropShadow_2287_14918"
                result="shape"
              />
            </filter>
            <linearGradient
              id="paint0_linear_2287_14918"
              x1="1233.38"
              y1="1326.78"
              x2="173.125"
              y2="-72.6698"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#50439F" stop-opacity="0.6" />
              <stop offset="0.48" stop-color="#50439F" />
              <stop offset="0.9999" stop-color="#50439F" stop-opacity="0.5" />
            </linearGradient>
          </defs>
        </svg> */}
        <Image
          src="/images/heroSection/hero_logo.png"
          alt=""
          width={391}
          height={227}
          className="relative z-10 px-[5px]"
        />
        <h2 className="z-10 w-[245px] text-center font-groppled text-xl font-semibold leading-[132%] text-bgWhite md:w-[275px]">
          {t('title')}
        </h2>
      </div>
      {/* </div> */}
    </section>
  );
};

export default Hero;
