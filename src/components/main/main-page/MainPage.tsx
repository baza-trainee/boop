'use client';

import Image from 'next/image';
import Vision from '../vision/Vision';
import Values from '../values/Values';
import Goals from '../goals/Goals';
import Counter from './counter/Counter';
import PressAboutUs from './press-about-us/PressAboutUs';
import Mission from './mission/Mission';
import Partners from './partners/Partners';
import Hero from './hero/Hero';
import Founders from './founders/Founders';
import Gallery from './gallery/Gallery';

const MainPage = () => {
  return (
    <>
      {/* <div className="relative flex min-h-[100vh] w-full items-center justify-center bg-bgWhite">
        <Image
          src="/images/hero-bg-image.svg"
          alt=""
          width={750}
          height={600}
          className="-z-1 absolute -top-[100px] right-0"
        />
      </div> */}
      <div className="bg-bgWhite">
        <Hero />
        <Founders />
        <Vision />
        <Values />
        <Mission />
        <Goals />
        <Counter />
        <PressAboutUs />
        <Gallery />
        <Partners />
      </div>
    </>
  );
};

export default MainPage;
