'use client';

import Hero from './hero/Hero';
import Founders from './founders/Founders';
import Vision from './vision/Vision';
import Values from './values/Values';
import Mission from './mission/Mission';
import Goals from './goals/Goals';
import Counter from './counter/Counter';
import PressAboutUs from './press-about-us/PressAboutUs';
import Payment from '../payment/Payment';
import Gallery from './gallery/Gallery';
import Partners from './partners/Partners';

const MainPage = () => {
  return (
    <>
      <div className="bg-bgWhite ">
        <Hero />
        <Founders />
        <Vision />
        <Values />
        <Mission />
        <Goals />
        <Counter />
        <PressAboutUs />
        <Payment />
        <Gallery />
        <Partners />
      </div>
    </>
  );
};

export default MainPage;
