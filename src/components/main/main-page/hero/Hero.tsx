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
    <section className=" container relative mx-auto box-border flex   max-w-screen-3xl flex-col items-center  justify-center  ">
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
      <div className="relative">
        {/* <picture>
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
            className=" relative -right-5 -top-0 z-[2] w-[872px]
        "
          />
        </picture> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="390"
          height="711"
          viewBox="0 0 390 711"
          fill="none"
        >
          <g filter="url(#filter0_bd_2287_18168)">
            <path
              d="M120.826 -27.2939C120.826 -27.2939 124.721 10.5197 138.5 40C141.607 46.6474 166.5 83.5 185 95.5C211.271 112.541 281.18 122.891 337.282 146.813C360 156.5 399.681 180.654 403.5 227.5C404.315 237.5 405.693 258 393 283C373.961 320.5 337.87 331.049 317.627 332.649C231 339.5 177.159 275 138.5 275C133 275 110.237 273.915 88.5 289.5C62 308.5 47 339 59 377C60.1036 380.495 66 397 88.5 416C132.736 453.355 198.411 443.862 260.75 463.509C275 468 289.812 472.847 308.752 483.743C326.361 493.873 344.058 507.874 354.058 516.655C373.078 533.359 381.125 542.546 400.423 565.027C420.968 588.959 442.397 615.905 442.397 615.905"
              stroke="url(#paint0_linear_2287_18168)"
              stroke-opacity="0.75"
              stroke-width="110"
              shape-rendering="crispEdges"
            />
          </g>
          <defs>
            <filter
              id="filter0_bd_2287_18168"
              x="-40.2461"
              y="-53.0675"
              width="565.689"
              height="763.208"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="5" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_2287_18168"
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
                in2="effect1_backgroundBlur_2287_18168"
                result="effect2_dropShadow_2287_18168"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect2_dropShadow_2287_18168"
                result="shape"
              />
            </filter>
            <linearGradient
              id="paint0_linear_2287_18168"
              x1="394.294"
              y1="661.216"
              x2="-86.3578"
              y2="259.743"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#50439F" stop-opacity="0.6" />
              <stop offset="0.48" stop-color="#50439F" />
              <stop offset="0.9999" stop-color="#50439F" stop-opacity="0.5" />
            </linearGradient>
          </defs>
        </svg>
        <div
          className={`absolute right-[50px] top-[247px] z-10 flex w-[247px]  flex-col items-center justify-center md:w-[341px] ${locale === 'en' ? 'gap-3' : 'gap-6'} `}
        >
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
      </div>
      {/* <div
        className={` flex w-[247px] flex-col items-center justify-center md:w-[341px] ${locale === 'en' ? 'gap-3' : 'gap-6'} `}
      > */}

      {/* <Image
          src="/images/heroSection/hero_logo.png"
          alt=""
          width={391}
          height={227}
          className="relative z-10 px-[5px]"
        />
        <h2 className="z-10 w-[245px] text-center font-groppled text-xl font-semibold leading-[132%] text-bgWhite md:w-[275px]">
          {t('title')}
        </h2>
      </div> */}
      {/* </div> */}
    </section>
  );
};

export default Hero;
