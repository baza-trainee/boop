'use client';

import Image from 'next/image';
import Vision from '../vision/Vision';
import Values from '../values/Values';
import Counter from './counter/Counter';
import PressAboutUs from './press-about-us/PressAboutUs';
import ContactsPage from '../contacts/ContactsPage';

const MainPage = () => {
  return (
    <>
      <div className="relative flex min-h-[100vh] w-full items-center justify-center bg-bgWhite">
        <Image
          src="/images/hero-bg-image.svg"
          alt=""
          width={750}
          height={600}
          className="-z-1 absolute -top-[100px] right-0"
        />
      </div>
      <Vision />
      <Values />
      <Counter />
      <PressAboutUs />
      <ContactsPage />

    </>
  );
};

export default MainPage;
